import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
const Lstep = () => {
  return (
    <div className="laststep">
            <div className="header">Your season to deliver more</div>
            <div className="imager1">
                <img className="picimg" src={img1} alt="" />
            </div>
            <div className="imager2">
                <img className="picimg" src={img2} alt="" />
            </div>
            <div className="imager3">
                <img className="picimg" src={img3} alt="" />
            </div>
            <div className="matter1">
                 <h3 className="inside">Get ahead of tariff</h3>

            <br/>The world of trade is always changing—but you don’t have to navigate it alone. FedEx gives you the tools and guidance you need to ship with confidence.

            <br/><br/><h4 className="matter">UNDERSTAND TARIFFS</h4>
            </div>
            <div className="matter2">
                <h3 className="inside">Take your chance at Super Bowl LX
                </h3> <br/>It’s game time! Enter the FedEx Super Bowl LX Sweepstakes before December 22 for your chance to win. Earn extra entries when you use eligible FedEx® services.
            <br/><br/><h4 className="matter">REGISTER NOW</h4>
            </div>
            <div className="matter3">
                <h3 className="inside">Ship. Earn. Celebrate.</h3>
                <br/>Wrap up the year with perks that pay off. Join FedEx Rewards to earn name-brand gift cards for the packages you send every day.*
                <br/><br/><h4 className="matter">OPEN A FREE ACCOUNT</h4>
            </div>
        </div>
    )
}

export default Lstep
