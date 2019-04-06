import React, { Component } from 'react';
import {getGood} from "../../store/actions/requests/getGood";
import {add} from "../../store/actions/basket";
import connect from "react-redux/es/connect/connect";


class Basket extends Component {

  actionWithFood = (id, action) => {
    let orderDetails = this.state.orderDetails;

    if (action === 'add')
      orderDetails = this.addFood(id, orderDetails);

    else if (action === 'removeOrDelete')
      orderDetails = this.removeOrDelete(id, orderDetails);

    let totalPrice = this.calculateTotalPrice(orderDetails);
    this.setState({
            ...this.state,
            orderDetails,
            totalPrice
        }
    );
  };


  addFood = (id, basket) => {
    let food = "";
    let foodId = basket.findIndex(orderFood => {
            return orderFood.id === id;
        });

    if (foodId < 0) {
      food = this.state.items[id];
      basket.push(
        {id: id, name: food.name, price: food.price, count: 1,}
      );
    }

    else {
      food = basket[foodId];
      food.count = food.count + 1;
      food.price = food.price + this.state.items[id].price;
    }

    return basket;
  };


  removeOrDelete = (id, basket) => {
    let foodId = basket.findIndex(orderFood => {
            return orderFood.id === id;
        });
    if (basket[foodId].count > 1) {
      let food = basket[foodId];
      food.count = food.count - 1;
      food.price = food.price - this.state.items[id].price;
    }

    else
      basket.splice(foodId, 1);

    return basket;
  };

  calculateTotalPrice = (basket) => {
    let totalPrice = 0;

    for(let food in basket)
      if (basket.hasOwnProperty(food))
        totalPrice = totalPrice + basket[food].price;

    return totalPrice;
  };


  render() {
      let sum = 0;
      if (Object.keys(this.props.basket).length !== 0)
        return (
          <div className="Basket">
              {
                  Object.values(this.props.basket).map((good, i) => {
                      console.log(good);
                      const {name, price, count} = good;
                      sum = sum + (count * price);
                          return <p key={i} className={'h3'}>{name} {price} {count} </p>
                      })}
                  <p>Итого сумма: {sum}</p>
              </div>);
      else return <h2 className='text-center'>Корзина пуста</h2>;
  }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    }
};

const mapDispatchToProps = dispatch => ({
    getGood: (id) => dispatch(getGood(id)),
    add: (id, name, price) => dispatch(add(id, name, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);