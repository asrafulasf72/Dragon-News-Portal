import React from 'react';
import facebook from '../../assets/fb.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const FindUs = () => {
    return (
        <div className='my-5'>
              <h1 className='text-[1.2rem] font-medium'>Find Us On</h1>

              <div className="join join-vertical w-full mt-3">
                    <button className="btn join-item bg-base-100 flex justify-start gap-1.5 hover:bg-base-200"> <img src={facebook} alt="" />Facebook</button>
                    <button className="btn join-item bg-base-100 flex justify-start gap-1.5 hover:bg-base-200"> <img src={twitter} alt="" />Twitter</button>
                    <button className="btn join-item bg-base-100 flex justify-start gap-1.5 hover:bg-base-200"> <img src={instagram} alt="" />Instagram</button>
              </div>
        </div>
    );
};

export default FindUs;