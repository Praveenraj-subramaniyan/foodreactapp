import Dish from './Dish';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"


function DetailPage() {
     const history= useParams();
    const [detailList, setdetailList] = useState([])
    const [resList, setresList] = useState([])
    useEffect (() => {
        async function FetchDetailsData(){
          try {
            
            let listData = await axios.get(`http://localhost:3000/food/${history.id}`)
            setdetailList(listData.data.dishes)
            setresList(listData.data)
          }
          catch (error) {
            console.log(error)
          }
        }
        FetchDetailsData()
      },[])
    return (
     
      
        <div className="container">
            <div className="showcase">
                <img src={resList.image_url} className="hero-image img-fluid" alt="Responsive" />
            </div>
            <div className="titlecase">
                <h1>{resList.res_name}</h1>
                <h5>{resList.location}</h5>
                <h6>{resList.ratting}</h6>
                <a href="" className="btn btn-danger"><i className="fa fa-home"></i> Home</a>
                <button className="btn btn-outline-danger"><i className="fa fa-comments"></i> Add Review</button>
                <button className="btn btn-outline-danger"><i className="fa fa-map-marker"></i> Direction</button>
                <button className="btn btn-outline-danger"><i className="fa fa-bookmark"></i> Add Bookmark</button>
                <button className="btn btn-outline-danger"><i className="fa fa-share"></i> share</button>
            </div>
            <div className="contentcase">
            {
              detailList.map((item) => {
                return <Dish dishName={item.dish_name} category={item.category} image={item.dish_image_url} price={item.price} ratting={item.ratting}/>
               })
            }
            </div>
        </div>
    );
}

export default DetailPage;
