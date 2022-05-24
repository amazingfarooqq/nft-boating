import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from './../../images/1.jpeg'
import img2 from './../../images/2.jpeg'
import img3 from './../../images/3.jpeg'
import img4 from './../../images/1.jpeg'
import img5 from './../../images/5.jpeg'
import img6 from './../../images/6.jpeg'
import img7 from './../../images/7.jpeg'
import img8 from './../../images/8.jpeg'
import img9 from './../../images/9.jpeg'
import img10 from './../../images/10.jpeg'
import img11 from './../../images/11.jpeg'
import img12 from './../../images/12.jpeg'
import img13 from './../../images/13.jpeg'

export const HomeSection3 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        
        arrows: false,
      };
  return (
      <div className="row justify-content-center my-5 pb-5">

            <Slider className="col-11 col-lg-6 p-4  text-center" {...settings}>
           
           <div className="row justify-content-center">
               <img
                 className="rounded col-12"
                 style={{ height: "400px" }}
                 src={img1}
                 alt=""
               />
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img2}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img3}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img4}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img5}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img6}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img7}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img8}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img9}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img10}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img11}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img12}
                 alt=""
               />
             </div>
           
           </div>
           <div className="row justify-content-center">
             <div className="col-12">
               <img
                 className="rounded w-100"
                 style={{ height: "400px" }}
                 src={img13}
                 alt=""
               />
             </div>
           
           </div>
       
       
       </Slider>
          <div className="col-11 col-lg-5 mt-3">
              <h2 style={{fontSize: '50px'}} className='fw-bold'>Booking Is <span className='text-danger'>On</span> </h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et non rerum nihil unde alias, expedita repellendus dolorum temporibus accusamus, sit necessitatibus quo architecto. Ratione, in voluptate architecto unde neque mollitia labore dignissimos nihil corrupti repudiandae iure, inventore quas veritatis officiis magnam porro quidem at totam aut rerum voluptatibus facere assumenda. Harum minus deserunt quia porro explicabo eum quod vitae soluta cum ducimus, officiis nostrum a qui maiores consequuntur praesentium reprehenderit eligendi blanditiis placeat dicta debitis? Odio asperiores,!</p>
          </div>
      </div>
   
  )
}
