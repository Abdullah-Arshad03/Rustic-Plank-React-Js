import React from "react";


const Deals = () =>{

    return (<>

<section className="Hot-Deals-Section">
        <div className="hot-deal-heading">
          <h2>Hot Deals</h2>
        </div>
        <div className="posters">
          <div className="left-poster">
            <img src="/public/images/left-poster.png" width="400x" alt="" />
          </div>
          <div className="right-poster">
            <img src="/public/images/right-poster.png" width="400px" alt="" />
          </div>
        </div>
      </section>

      <section className="buy-online-poster">
        <img src="/public/images/buy-online.png" width="74%" />
      </section>

    
    </>)
}
export default Deals