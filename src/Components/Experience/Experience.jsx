
import React from 'react'
import './Experience.css';
import { ImCheckboxChecked } from "react-icons/im";

const Expererience = () => {
  return (
    <section id='Experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front End Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4> CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div> 
            <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Data Analysis & Power Platform Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4>Intermediate Excel</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
                <h4>Power BI</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <ImCheckboxChecked className='experience_details-icon'/>
            <div>
              <h4>Power Apps, SharePoint</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Expererience