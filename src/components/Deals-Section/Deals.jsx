import React from "react";
import leftPoster from '../../../images/left-poster.png'
import rightPoster from '../../../images/right-poster.png'



const Deals = () =>{

    return (<>

<section className="Hot-Deals-Section">
        <div className="hot-deal-heading">
          <h2>Hot Deals</h2>
        </div>
        <div className="posters">
          <div className="left-poster">
            <img src={leftPoster} width="400x" alt="" />
          </div>
          <div className="right-poster">
            <img src={rightPoster} width="400px" alt="" />
          </div>
        </div>
      </section>

      <section className="buy-online-poster">
        <img src="/public/images/buy-online.png" width="74%" />
      </section>

    
    </>)
}
export default Deals