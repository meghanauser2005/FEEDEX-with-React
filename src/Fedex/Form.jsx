import React from 'react'
import photo from '../assets/fphoto.png'
const Form = () => {
  return (
    <div className="info">
            <div className="heading">
                <h2>Why ship with FedEx?</h2>
            </div>
            <div className="one">
                <h4>Innovative solutions for reliability & speed</h4>
                <br/>Whether it's across states or worldwide, we prioritize the secure and swift arrival of your shipments.
            </div>
            <div className="two">
                <h4>Premium shipping at professional rates</h4>
                <br/>When you need reliable delivery and careful handling, trust FedEx to get your items where they need to go on time.
            </div>
            <div className="three">
                <h4>We ship everywhere*</h4>
                <br/>From major cities to remote locations, your goods can reach worldwide.
            </div>
            <div className="four">
                <h4>FedEx can ship for less than the Post Office</h4>
                Two-day shipping, one flat rate. FedEx One Rate®.**
            </div>
            <div className="five">
                <h6>*FedEx doesn't ship anywhere sanctioned by the U.S.<br/>**Exclusions apply. Visit the FedEx One Rate page to learn more.</h6>
            </div>
            <div className="photo">
               <img className="fphoto" src={photo} alt="" />
            </div>
            <div className="box">
                <h2>START SHIPPING NOW</h2>
            </div>
        </div>
  )
}

export default Form
