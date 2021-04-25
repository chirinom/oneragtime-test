import React from 'react'
import CardContainer from './Card'

const data = [
  {
    id: 1,
    title: 'Users',
    number: '25,000',
    path: '#9B8CBF',
    pct: 60
  },
  {
    id: 2,
    title: 'Jobs',
    number: '11,700',
    path: '#FED67E',
    pct: 75
  },
  {
    id: 3,
    title: 'Countries',
    number: '120',
    path: '#89D0C2',
    pct: 55
  },
  {
    id: 4,
    title: 'Companies',
    number: '20,000',
    path: '#7FD5F4',
    pct: 85
  },
]

export default function Cards() {
  return (
    <>
      <h4 className="cards-header">Our Portfolio</h4>
      <div className="row">
        {
          data.map(card => (
            <div className="cards col-6 col-lg-3" key={card.id}>
              <CardContainer
                number={card.number}
                title={card.title}
                path={card.path}
                pct={card.pct}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}
