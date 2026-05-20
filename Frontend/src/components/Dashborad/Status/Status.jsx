import React from 'react'
import style from './Status.module.css'
import CardStatus from '../../ui/CardStatus/CardStatus'
export default function Status() {
  return (
    <section className='py-4 '>
    <div className="container">
         <div className="row ">
              <div className="col-12 col-md-3"  ><CardStatus counter={120}  title="Projects" icon={"fa-solid fa-building-shield"} /></div>
              
              <div className="col-12 col-md-3"  > <CardStatus counter={95}  title="Users" icon={"fa-solid fa-people-group"} /></div>
                       
              <div className="col-12 col-md-3"  ><CardStatus counter={90} title="Developers" icon={"fa-solid fa-helmet-safety"} /></div>
                 
              <div className="col-12 col-md-3"  ><CardStatus counter={107} title="Blogs" icon={"fa-solid fa-blog"} /></div>
                
         </div>
    </div>
    </section>
  )
}
