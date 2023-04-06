import React from 'react'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Page2 = () => {
  return (
    <div>
      <section className="pg-2">
        <div className="heading-pg2">
            <div className="pg-2heading">
                <h1 >Discover New Destination</h1>
            </div>
            {/* dropdwons */}
            
            <div className="dropdowns">
                <div className="dropdown-1">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Location
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown-2">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Date
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown-3">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          People
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className="explorebtn">
                    <button>Explore Now</button>
                </div>
            </div>
            {/* dropdowns-end */}

            <div className="pg-2para">
                <p><span style={{color:'#c21c00',fontWeight:'bold'}}>Popular search:</span> Rishikesh, Haridwar, Manali, Srinagar, Goa</p>
            </div>

            <div className="values">
                <h1>What we serve</h1>
                <h1 style={{color:'#c21c00'}}>Best Values For You</h1>
                <p style={{fontSize: '20px', marginBottom:'4vw'}}>Try a variety of benifits when using our services.</p>
                <div className="pg-2icons">
                    <div className="pg2-icon" id="icon1">
                        <img src={icon1}/>
                        <h5 style={{fontWeight: 'bold'}}>Lot of Choices</h5>
                    </div>
                    <div className="pg2-icon" id="icon2">
                        <img src={icon2}/>
                        <h5>Best Tour Guide</h5>
                    </div>
                    <div className="pg2-icon" id="icon3">
                        <img src={icon3}/>
                        <h5>Lot of Discounts</h5>
                    </div>
                    <div className="pg2-icon" id="icon4">
                        <img src={icon4}/>
                        <h5>Easy Booking</h5>
                    </div>
                </div>
            </div>
            <div className="destination">
                <h1>Top Destination</h1>
                <h1 style={{color:'#c21c00'}}>Explore Top Destinations</h1>
            </div>

        </div>

    </section>
    </div>
  )
}

export default Page2
