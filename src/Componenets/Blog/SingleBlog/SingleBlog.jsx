import React from 'react';
import './SingleBlog.css'
import { HiBookmarkSquare } from "react-icons/hi2";
const SingleBlog = (props) => {
  // console.log(props.blog);
  const { author_image,author_name, blog_title,id, image,publish_date, read_time} = props.blog;
  const handleCartValue = props.handleCartValue;
  const handleSideCart=props.handleSideCart;
  return (
    <div className='md:w-[545px] singleBlog'>
      <img className='h-[280px] w-full rounded' src={image} alt="" />
      <div className="flex justify-between items-center mt-5 mb-5 pl-2 pr-4">
        <div className="flex justify-between items-center gap-5">
          <img className="w-75 h-12 rounded-full " src={author_image} alt="" />
          <div>
            <p className="font-bold">{author_name}</p>
            <p>{publish_date}</p>
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          {read_time} min read{" "} 
          <span  >
          <HiBookmarkSquare onClick={() => handleSideCart(blog_title)}></HiBookmarkSquare>
          </span>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-3 ml-2">{blog_title}</h1>
      <span className="mr-5 mb-5 ml-2">#beginners</span>
      <span className="mb-5 ml-2">#programming</span> <br />
      <h1
        onClick={() => handleCartValue(read_time)}
        className="text-[#6047EC] underline cursor-pointer ml-2"
      >
        Mark as read
      </h1>
    </div>
  );
};

//     </div>
//   );
// };

export default SingleBlog;