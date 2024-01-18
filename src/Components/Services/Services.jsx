
import React from 'react'
import './Services.css'
import { TiTick } from "react-icons/ti";

const Services = () => {
  return (
    <section id='Services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        {/* start of ui/ux design */}
          <article className='service'>
            <div className="service_head">
                 <h3>Front End Development</h3>
            </div>
            <ul className='service_list'>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Develop scalable and responsive web applications tailored to the specific needs and requirements</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Leverage React's component-based architecture to create efficient SPAs that provide a seamless and dynamic user experience.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Implement responsive designs to ensure optimal user experience across various devices, including desktops, tablets, and mobile phones.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Integrate APIs seamlessly with React applications to fetch and display dynamic content, ensuring real-time data updates and improved user engagement. </p>
              </li>
            </ul>
          </article>
          {/* start of web development */}
          <article className='service'>
            <div className="service_head">
                 <h3>Back-end Development</h3>
            </div>

            <ul className='service_list'>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Build RESTful APIs using Node.js and Express to facilitate communication between the front end and back end of web applications.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Design and integrate databases, such as MongoDB, MySQL, or PostgreSQL, to store and manage application data effectively.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Implement secure user authentication using techniques like JWT (JSON Web Tokens) or OAuth, ensuring the protection of user credentials and sensitive data.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Develop custom middleware functions to handle specific tasks, such as logging, error handling, or request processing, enhancing the modularity and maintainability of the code.</p>
              </li>
            </ul>
          </article>
          {/* start of power platform */}
          <article className='service'>
            <div className="service_head">
                 <h3>Power Platform Development</h3>
            </div>

            <ul className='service_list'>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Develop custom Power Apps tailored to clients' specific business processes and requirements using the low-code environment provided by Power Platform.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Connect Power Apps to various data sources, such as Microsoft Dataverse, SharePoint, or external databases, to enable seamless data access and manipulation. </p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Design and create visually appealing and interactive Power BI dashboards and reports to help clients gain insights into their data.</p>
              </li>
              <li>
              <TiTick className='service_list-icon'/>
              <p>Provide consulting services to help clients identify the best use cases for Power Apps and Power BI within their organization, ensuring alignment with business goals.</p>
              </li>
            </ul>
          </article>
      </div>
    </section>
  )
}

export default Services