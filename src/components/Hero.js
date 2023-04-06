import React from 'react'
import kedarnath from '../images/kedarnath-1.webp'

const Hero = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide hero1" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
    
        {/* Wrapper for slides */}
        <div className="carousel-inner">
    
          <div className="item active">
            <img src={kedarnath} style={{width:'100%'}}/>
            <div className="carousel-caption">
              <h1>Embark on a spiritual journey to Char Dham with Us</h1>
              <p>Let Shakti Travels plan your ideal Char Dham package that promises you not just a holiday, but a pilgrim memory that will last a lifetime.</p>
            </div>
          </div>
    
          <div className="item">
            <img src={kedarnath} style={{width:'100%'}}/>
            <div className="carousel-caption">
                <h1>Embark on a spiritual journey to Char Dham with Us</h1>
                <p>Let Shakti Travels plan your ideal Char Dham package that promises you not just a holiday, but a pilgrim memory that will last a lifetime.</p>
            </div>
          </div>
        
          <div className="item">
            <img src={kedarnath} style={{width:'100%'}}/>
            <div className="carousel-caption">
                <h1>Embark on a spiritual journey to Char Dham with Us</h1>
                <p>Let Shakti Travels plan your ideal Char Dham package that promises you not just a holiday, but a pilgrim memory that will last a lifetime.</p>
            </div>
          </div>
        
          <div className="item">
            <img src={kedarnath} style={{width:'100%'}}/>
            <div className="carousel-caption">
                <h1>Embark on a spiritual journey to Char Dham with Us</h1>
                <p>Let Shakti Travels plan your ideal Char Dham package that promises you not just a holiday, but a pilgrim memory that will last a lifetime.</p>
            </div>
          </div>
      
        </div>
    
        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon "></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon "></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Hero
