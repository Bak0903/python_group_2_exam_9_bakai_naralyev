import React, {Component} from 'react';
import img from '../../stub/no_image.png';
// import {NavLink} from "react-router-dom";
import './GoodCard.css';


class GoodCard extends Component {
    render() {
        const {id, name, photo_good} = this.props.good;
        return (
            <div className="card col-sm-12 col-md-4 border-0" id={id}>
                <div className='photo'>
                    {photo_good[0] ? <img className="card-img-top" src={photo_good[0].photo} alt="poster"/> :
                        <img className="card-img-top" src={img} alt="poster"/>}
                </div>
                    <div className="card-body">
                        <button><p className="card-text">{name}</p></button>
                    </div>
            </div>
        );
    }
}

export default GoodCard;