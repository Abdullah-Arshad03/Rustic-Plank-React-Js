import React from "react";
import leftPoster from '../../../images/left-poster.png'
import rightPoster from '../../../images/right-poster.png'




const Updates = () =>{

    return (<>

<section className="latest-updates">
        <h2 className="latest-updates-heading">Latest Updates</h2>
        <div className="update-posters">
          <div className="update-left-poster">
            <img src={leftPoster} width="300x" alt="" />
            <h3>Lorem ipsum</h3>
            <p className="para-in-updates">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              dicta odio quo reiciendis cumque placeat minus odit, modi,
              blanditiis iure consectetur. Dolore earum ad nulla cum repellendus
              dolorem amet maiores?
            </p>
            <section className="para-btn1"><button>Details</button></section>
          </div>
          <div className="update-middle-poster">
            <img src={rightPoster} width="300px" alt="" />
            <h3>Lorem ipsum</h3>

            <p className="para-in-updates">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              dicta odio quo reiciendis cumque placeat minus odit, modi,
              blanditiis iure consectetur. Dolore earum ad nulla cum repellendus
              dolorem amet maiores?
            </p>
            <section className="para-btn1"><button>Details</button></section>
          </div>
          <div className="update-right-poster">
            <img src={rightPoster} width="300px" alt="" />

            <h3>Lorem ipsum</h3>
            <p className="para-in-updates">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              dicta odio quo reiciendis cumque placeat minus odit, modi,
              blanditiis iure consectetur. Dolore earum ad nulla cum repellendus
              dolorem amet maiores?
            </p>
            <section className="para-btn1"><button>Details</button></section>
          </div>
        </div>
      </section>

    
    </>)
}
export default Updates