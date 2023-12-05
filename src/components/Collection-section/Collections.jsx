import React from "react";
import product1 from '../../../images/product1.png'
import product2 from '../../../images/product2.png'
import product3 from '../../../images/product3.png'


const Collections = ()=>{
    return(<> <section className="third">
    <section className="box box1">
      <p  className="text-bed"><span className="black-text"> CHAIRS </span><br /><span className="color orange-text">COLLECTION</span></p>

      <img className="box-one-img" src={product1} />f
    </section>
    <section className="box box2">
      <section className="s-text">
        <div className="text-bed">
        <p  ><span className="black-text"> BED</span><br /><span  className="color orange-text">COLLECTION</span></p>
      </div>
      </section>
      <section><img className="box-two-img" src={product2} /></section>
    </section>
    <section className="box box3">
      <p ><span className="black-text"> TABLES</span><br /><span className="color orange-text">COLLECTION</span></p>

      <img className="box-third-img" src={product3} />
    </section>
  </section></>)
}

export default Collections