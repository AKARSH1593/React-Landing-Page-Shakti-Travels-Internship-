import React from 'react'
import subsimg from '../images/subscribe.jpg'

const Subscribe = () => {
  return (
    <div>
      <section className="Subs">
        <div style={{position:'relative'}}>
            <img src={subsimg}  style={{width:'100%', height:'15vw'}}/>
            <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:'1'}}>
              <h1 style={{color:'white',fontSize: '50px',fontWeight:'bold',paddingLeft:'5vw', paddingBottom:'1vw'}
            }>Subscribe and be updated</h1>
              <div className="subscribe">
                <input type="text" placeholder="Please enter your email address to get latest updates and offers"/>
                <button>Subscribe </button>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Subscribe
