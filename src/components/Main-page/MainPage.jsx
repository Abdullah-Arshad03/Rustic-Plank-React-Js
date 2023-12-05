import React from "react";
import mainImage from '../../../images/2.png'


const MainPage = () =>{
    return(<>
   <section className="second">
        <section className="product">
          <img className="second-image" src={mainImage} /></section>
        <section className="text">
          <p className="info">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.<br />
            <br />
            <span className="rate">$129</span>.99 <b>OUR PRICE</b>
          </p>
          <button className="r-button">
            add to cart
            {/* <!-- <i className="fa-solid fa-cart-shopping" style="color: #f97907"></i> --> */}
          </button>
        </section>
      </section>

    </>)
}

export default MainPage