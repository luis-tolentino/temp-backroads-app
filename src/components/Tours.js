import React from 'react'
import Title from './Tittle'
import { toursList } from '../data'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={'featured'} subtitle={'tours'} />

      <div className="section-center featured-center">
        {toursList.map((tour) => {
          const { id, img, title, text, date, icon, country, length, price } =
            tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{length}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
