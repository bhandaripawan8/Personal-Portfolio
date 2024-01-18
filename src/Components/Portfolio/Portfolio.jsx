import React from 'react'
import './Portfolio.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.png'
import Portfolio4 from '../../assets/portfolio4.png'
import Portfolio5 from '../../assets/portfolio5.png'

const Portfolio = () => {
  const portfolio = [
    {
      id: 5,
      Title: "Expense-Tracker",
      image: Portfolio5,
      github: 'https://github.com/bhandaripawan8/Expense-Tracker',
      demo: 'https://expense-tracker-2xp.pages.dev/'
    },
    {
      id: 4,
      Title: "To-Do list",
      image: Portfolio4,
      github: 'https://github.com/bhandaripawan8/ToDo-list',
      demo: 'https://todo-list-cgs.pages.dev/'
    },
    {
      id: 3,
      Title: "Tindog",
      image: Portfolio2,
      github: 'https://github.com/bhandaripawan8/tindog',
      demo: 'https://tindog-ek6.pages.dev/'
    },
    {
      id: 1,
      Title: "NCC-Airline",
      image: Portfolio1,
      github: 'https://github.com/bhandaripawan8/Airlines',
      demo: 'https://airlines.pages.dev/'
    },
    {
      id: 2,
      Title: "Forest",
      image: Portfolio3,
      github: 'https://github.com/bhandaripawan8/forest',
      demo: 'https://forestassignment.pages.dev/'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {
            portfolio.map(({id, image, Title, github, demo})=>{
              return(
                <article key = {id} className='portfolio_item'>
                <h3>{Title}</h3>
                <div className="portfolio_item-image">
                  <img src={image} alt="first-project"className='portfolio_item-img'/>
                </div>
                  <div className="portfolio_item-cte">
                    <a href={github} className='btn btn-primary'>Github</a>
                    <a href={demo} className='btn btn-primary'>Demo</a>
                  </div>
                </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio