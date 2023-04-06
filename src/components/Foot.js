import React from 'react'
import companyimg from '../images/company-logo.png'

const Foot = () => {
  return (
    <div>
      <section className="footer">
        <div className="logofooter">
            <img src={companyimg}/>
            <p style={{width: '32vw'}}>We are passionate about helping people create unforgettable travel experiences with years of experience</p>
        </div>
        <div className="logofooter1">
            <h2>Follow Us</h2>
            <div className="social-icons">
                <a href="#" style={{color:'#c21c00',fontSize:'3.3vw'}}><i className='bx bxl-instagram-alt'></i></a>
                <a href="#" style={{color:'#c21c00',fontSize: '3.3vw'}}><i className='bx bxl-facebook-circle'></i></a>
                <a href="#" style={{color:'#c21c00',fontSize: '3.3vw'}}><i className='bx bxl-twitter' ></i></a>
            </div>
            <p>+91-1234567890, +91-1234567890</p>
        </div>
    </section>
    </div>
  )
}

export default Foot
