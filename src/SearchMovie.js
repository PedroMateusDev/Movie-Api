
import React , {useState }from 'react'





const SearchMovie = () => {

    const [query, setQuerry] = useState("")
    const [movie, setMovie] = useState([])



    const SearchMovies = async (e) => {


    e.preventDefault();

   
    
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3f41da305d8f8cc7780887e3ddb11213&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data.results);
        setMovie(data.results)
    }catch(err){
        console.error(err);
    }
}




  return (
    <div>
      <form className="form" onSubmit={SearchMovies}>
            <label className="label focus-in-contract-bck" htmlFor="query">Movie Name</label>
            <input className="input bounce-in-top" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query}
                onChange={(e) => setQuerry(e.target.value)}/>
            <button className="button focus-in-contract-bck" type="submit">Search</button>
        </form>
        <div className='card-list'>
            {movie.filter(item => item.poster_path).map((item) => {
                return(
                    <div className='card' key={item.id}>
                        <img className='card--image' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.tittle + "banner"}/>
                        <div className='card--contaienr'>
                            <h3 className='card--title'>
                                {item.title}
                            </h3>
                            <p><small>RELEASE DATE: {item.release_date}</small></p>
                            <p><small>RATING: {item.vote_average}</small></p>
                            <p className="card--desc">{item.overview}</p>
                        </div>
                    </div>
                    )
            })}
            
        </div>
    </div>
  )
}

export default SearchMovie
