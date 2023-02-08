import './Card.scss'

import Image from  'next/image'

export default function Card({movie}: any) {
    console.log(movie)
    return(
        <div className="card">
              <h2 className="card__title">{movie.title}</h2>
              <Image src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} width={175} height={230} alt="" />
              <p className="card__date">{movie.release_date}</p>
        </div>
    )    
}