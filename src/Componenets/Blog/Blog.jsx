import React, { useEffect, useState } from 'react';
import './Blog.css'
import SingleBlog from './SingleBlog/SingleBlog';
import Sitecart from './SiteCart/Sitecart';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalTime,setTotalTime] = useState(0)
  const [count,setCount] = useState(0)
  
  useEffect(()=>{
    fetch('fakeDB.json')
    .then(res=>res.json())
    .then(data=> setBlogs(data))
  },[])

  const handleCartValue =(time)=>{
    const newTotal = totalTime + time;
    setTotalTime(newTotal)
  }

  const handleSideCart = (title)=>{
    const titleAdded = [...cart,title];
    setCart(titleAdded);
    setCount(count+1)
  }
 


  return (
    <div className='blogs-container'>
        <div className='single-blog-container'>
         {
          blogs.map(blog=><SingleBlog
            handleSideCart={handleSideCart}
            key={blog.id}
            blog={blog}
            handleCartValue={handleCartValue}
          ></SingleBlog>)
         }
        </div>
        <div className='cart-container'>
          <Sitecart totalTime={totalTime} cart={cart} count={count}>

          </Sitecart>
        </div>
    </div>
  );
};

export default Blog;