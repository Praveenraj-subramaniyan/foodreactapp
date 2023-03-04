import React from 'react'

function Dish(p) {
    return (
<div>
<ul className="list-group"> 
        <li className="list-group-item d-flex justify-content-between">
            <div>
                <div className="row">
                    <div className="col">
                        <img src={p.image} className="list-image rounded float-left" alt="list" />
                    </div>
                    <div className="col">
                        <h5>{p.dishName}</h5>
                        <p><i className="fa fa-star" ></i><i className="fa fa-star"></i><i className="fa fa-star" ></i><i className="fa fa-star" style={{ color: "gold" }}></i><i className="fa fa-star"></i></p>
                        <p>₹ {p.price}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-danger">Add <i className="fa fa-plus"></i></button>
            </div>
        </li>
        </ul>
</div>
    );
}

export default Dish;