import React from 'react';
import './Sitecart.css'

const Sitecart = ({totalTime,cart,count}) => {
  return (
    <div>
      <div className='totalTime'>
        <p>Spent time on read : {totalTime} min</p>
      </div>
      <div className='bookmarkList'>
        <h2>Bookmarked Blogs : {count}</h2>
      </div>
      <div className='titleList'>
       {
          cart.map((title,index)=>(<p key={index}>{title}</p>))
        }
       </div>
    </div>
  );
};

export default Sitecart;