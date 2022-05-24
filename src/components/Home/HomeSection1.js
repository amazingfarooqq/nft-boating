import React from 'react'
import './home.css';

export const HomeSection1 = () => {
  return (
   <div className="row justify-content-center home_section1 mt-5 pb-5">
       <div className="col-12 text-center text-lg-start col-lg-5 d-flex flex-column justify-content-center">
            <h2 style={{fontSize: "60px"}} className=' fw-bold'>Welcome <span className='text-danger'>Aboard</span></h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quam laborum libero explicabo aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aperiam totam id vitae, sapiente aut, mollitia, eligendi veritatis tenetur omnis nulla alias numquam temporibus inventore ex voluptatibus maxime est cum!</p>
            <div className="col-12">
            <button className='btn btn-danger px-5 py-2'>Button</button>

            </div>
       </div>
       <div className="col-11 col-lg-6 ">
           <img className='w-100' src="https://www.pngitem.com/pimgs/m/108-1083500_sea-ray-boat-png-transparent-png.png" alt="" />
       </div>

       {/* <div className="col-11 fader col-lg-6 ">
           <img style={{transform: "scaleX(-1)"}} className='w-100 imgsection1' src="https://images.bvimedia.ca/vehicles/photos/09/68/096831_2020_sea_ray_SLX_Series_SLX_310.jpg" alt="" />
       </div> */}
   </div>
  )
}
