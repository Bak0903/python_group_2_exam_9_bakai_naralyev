import React, {Component} from 'react';
import img from '../../stub/no_image.png';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {getGood} from "../../store/actions/requests/getGood";
import {add} from "../../store/actions/basket";
import './Good.css';

class Good extends Component {

    componentDidMount() {
        this.props.getGood(this.props.match.params.id);
    }

    render() {
        const {loading, good, errors} = this.props;
        if (loading)
            return (<h1>loading...</h1>);
        else if (good) {
            const {name, id, photo_good, description, price} = good;
            let photos = null;
            if(photo_good)
                photos = photo_good.map((item, i) => {
                return <img key={i} className="card-img-top" src={item.photo} alt="poster"/>
            });
            return (
                <div className="card pb-2 col-12 mt-4">
                    <div className={'mt-2'}>
                        <div className="card-body d-flex col-md-12">
                            <div className='photos'>
                                {photos ? photos : <img className="card-img-top" src={img} alt="poster"/>}
                            </div>
                            <blockquote className="blockquote d-block col-md-8 mb-0">
                                <p className="card-header h2">{name}</p>
                                {description ? <p className="text-justify col-md-12 pt-2">
                                    Описание: {description}</p> : null}
                                {price ? <p className="text-justify col-md-12 pt-2">
                                    Цена: {price}</p> : null}
                                </blockquote>
                        </div>
                        <div className='d-flex float-right'>
                            <button className='myButton' onClick={() => this.props.add(id, name, price)}>Добавить</button>
                            <NavLink className='myButton' to="/basket">Корзина</NavLink>
                        </div>
                    </div>
                </div>);
        }
        else if (errors) console.log(errors);
        else return null;
    }
}


const mapStateToProps = (state) => {
    return {
        good: state.good,
        errors: state.errors,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => ({
    getGood: (id) => dispatch(getGood(id)),
    add: (id, name, price) => dispatch(add(id, name, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(Good);