import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import picture from '../assets/picture.png'
const Steps = () => {
  return (
    <div className="steps">
            <div className="head">
                Simplify the holiday hustle
            </div>
            <div className="pic1">
                <img src={pic1} alt="" />
            </div>
            <div className="pic2">
                <img src={pic2} alt="" />
            </div>
            <div className="pic3">
                <img src={pic3} alt="" />
            </div>
            <div className="side1">Need support? Start here.</div>
            <div className="side2">Tap into convenient tracking</div>
            <div className="side3">Pick up on your schedule</div>
            <div className="cont1">Skip the call to customer service. Get instant, step-by-step help to estimate shipping costs, order supplies, or manage deliveries.</div>
            <div className="cont2">Keep tabs on holiday shipments with the FedEx® Mobile app and FedEx Delivery Manager®. Track packages and get alerts right on your phone.</div>
            <div className="cont3">Busy with last-minute shopping or holiday travel? Hold your packages at a secure retail location and get them when you’re ready.</div>
            <div className="ending1"><h4>Ask FedEx Virtual Assistant</h4></div>
            <div className="ending2"><h4>Download the app</h4></div>
            <div className="ending3"><h4>Request a hold</h4></div>
            <div className="nextstep">
                <div className="content">
                    <h3>Know your last days to ship</h3>
                    <br/>Don't let deadlines steal your cheer. Keep track of <br/>shipping cutoff dates and make the holidays happy for<br/>everyone on your list.<br/>
                    <br/>
                    <h4 className="third">SEE SHIPPING DETAILS</h4>
                </div>
                <div className="picture">
                    <img className="pict" src={picture} alt="" />
                </div>
            </div>
        </div>
  )
}

export default Steps
