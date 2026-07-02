import { useState } from 'react'
import './App.css'

function Card({ title, image, description }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p className="card__desc">{description}</p>
        <div className="card__actions">
          <button
            className="card__btn"
            onClick={() => setLikes((n) => n + 1)}
            aria-label="Me gusta"
          >
            Me gusta {likes}
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
