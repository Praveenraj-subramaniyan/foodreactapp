import React from 'react';
import { Link } from 'react-router-dom';

function Card(p) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist ">
                <div className="card " >
                    <Link to={`/details/${p.id}`}>
                    <img className="card-img-top cardHeight"
                        src={p.image}
                        alt="Card cap" />
                    </Link>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h4 className="dish-name">{p.resName}</h4>
                            </div>
                            <div className="col">
                                <p className="rating">{p.rating} <i className="fa fa-star"></i></p>
                            </div>
                        </div>
                        <div>
                            <p className="dish-details">{p.location} </p>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default Card;