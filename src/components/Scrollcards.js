import React from 'react'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'

const Scrollcards = () => {
  return (
    <div>
      <section className="pg-3">
        <div className="container-fluid">
            <div className="row">
              <div className="scrollcards">
                
                  <div className="card">
                    <img className="card-img-top" src={card1}/>
                    <div className="cardcontent" style={{display:'flex', justifyContent: 'space-between'}}>
                        <div className="card-block">
                          <h4 className="card-title">Rishikesh</h4>
                          <div className="cardpara">
                              <p className="card-text">Yoga Capital of the world</p> 
                          </div>
                        </div>
                        <div className="card-block" style={{textAlign:'center'}}>
                          <h4 className="card-title" style={{color:'grey'}}>2N/3D</h4>
                          <h4 className="card-text" style={{background:'#c21c00',color:'white', borderRadius:'1.5vw', padding:'7px 15px'}}>Rs 4500</h4>
                        </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <img className="card-img-top" src={card2}/>
                    <div className="cardcontent" style={{display:'flex', justifyContent: 'space-between'}}>
                        <div className="card-block">
                          <h4 className="card-title">Devprayag</h4>
                          <div className="cardpara">
                              <p className="card-text">sacred place of merging of two visible heavenly rivers</p>
                          </div>
                        </div>
                        <div className="card-block" style={{textAlign:'center'}}>
                          <h4 className="card-title" style={{color:'grey'}} >1N/2D</h4>
                          <h4 className="card-text" style={{background:'#c21c00',color:'white', borderRadius:'1.5vw', padding:'7px 15px'}}>Rs 4000</h4>
                        </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <img className="card-img-top" src={card3}/>
                    <div className="cardcontent" style={{display:'flex', justifyContent: 'space-between'}}>
                        <div className="card-block">
                          <h4 className="card-title">Kedarnath</h4>
                          <div className="cardpara">
                              <p className="card-text">eleventh out of twelve jyotirlingas of India</p>

                          </div>
                        </div>
                        <div className="card-block" style={{textAlign:'center'}}>
                          <h4 className="card-title" style={{color:'grey'}}>3N/4D</h4>
                          <h4 className="card-text" style={{background:'#c21c00',color:'white', borderRadius:'1.5vw', padding:'7px 15px'}}>Rs 6500</h4>
                        </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <img className="card-img-top" src={card1}/>
                    <div className="cardcontent" style={{display:'flex', justifyContent: 'space-between'}}>
                        <div className="card-block">
                          <h4 className="card-title">Badrinath</h4>
                          <div className="cardpara">
                              <p className="card-text">it is one of the four sites in India's Char Dham pilgrimage</p>

                          </div>
                        </div>
                        <div className="card-block" style={{textAlign:'center'}}>
                          <h4 className="card-title" style={{color:'grey'}}>2N/3D</h4>
                          <h4 className="card-text" style={{background:'#c21c00',color:'white', borderRadius:'1.5vw', padding:'7px 15px'}}>Rs 4500</h4>
                        </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <img className="card-img-top" src={card2}/>
                    <div className="cardcontent" style={{display:'flex', justifyContent: 'space-between'}}>
                        <div className="card-block">
                          <h4 className="card-title">Rishikes</h4>
                          <div className="cardpara">
                              <p className="card-text">Yoga Capital of the world</p> 
                          </div>
                        </div>
                        <div className="card-block" style={{textAlign:'center'}}>
                          <h4 className="card-title" style={{color:'grey'}}>2N/3D</h4>
                          <h4 className="card-text" style={{background:'#c21c00',color:'white', borderRadius:'1.5vw', padding:'7px 15px'}}>Rs 4500</h4>
                        </div>
                    </div>
                  </div>

              </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Scrollcards
