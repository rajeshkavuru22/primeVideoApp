import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  console.log(comedyMoviesList, actionMoviesList)

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo"
      />
      <div className="content-container">
        <div className="container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider movies={actionMoviesList} key={comedyMoviesList} />
        </div>
        <div className="container">
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider movies={comedyMoviesList} key={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
