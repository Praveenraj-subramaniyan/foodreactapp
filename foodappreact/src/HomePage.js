import React, { useEffect, useState } from 'react';
import Header from './Header';
import Card from './Card';
import axios from 'axios';


function HomePage() {
  const [itemList, setItemList] = useState([])
  useEffect (() => {
    async function fetchData(){
      try {
        let listData = await axios.get("http://localhost:3000/food")
        setItemList(listData.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div class="foodie">
      <Header />
      <div className="container">
        <div className="content-page">
          <div className="row foodview">
            {
              itemList.map((item) => {
                return <Card resName={item.res_name} rating={item.ratting} location={item.location} image={item.image_url} id={item._id} />
               })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
