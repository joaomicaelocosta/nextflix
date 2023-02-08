
import '@/styles/modules/movie.modules.scss'
import {Movie} from '@/interface/Movie'
import Card from '@/components/card/Card'

async function getMovies() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=fdd690314f155c264f9bee9ac8586c9c&');
  const data = await res.json();    
  return data.results as Array<Movie>;
}


function search() { 
  console.log("chegou aqui", query)
} 

let query = ''

export default async function Movies() {
  const movies = await getMovies()

  
  
  return (
    <div className='container'>
      <form className="form">
            <input type="text" placeholder="Movie" value={query}/>
            <button>Search</button>
        </form>
        <div className="card-container">
          {movies.map((movie: Movie, id) => {
            return (
              <div key={id}>
                <Card movie={movie}/>
              </div> 
            )
          })}
        </div>
    </div>
   
  )
}