import React from "react";


const Collections = ()=>{
    return(<> <section className="third">
    <section className="box box1">
      <p  className="text-bed"><span className="black-text"> CHAIRS </span><br /><span className="color orange-text">COLLECTION</span></p>

      <img className="box-one-img" src="/public/images/product1.png" />
    </section>
    <section className="box box2">
      <section className="s-text">
        <div className="text-bed">
        <p  ><span className="black-text"> BED</span><br /><span  className="color orange-text">COLLECTION</span></p>
      </div>
      </section>
      <section><img className="box-two-img" src="/public/images/product2.png" /></section>
    </section>
    <section className="box box3">
      <p ><span className="black-text"> TABLES</span><br /><span className="color orange-text">COLLECTION</span></p>

      <img className="box-third-img" src="/public/images/product3.png" />
    </section>
  </section></>)
}

export default Collections