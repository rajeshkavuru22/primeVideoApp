import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './index.css'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem
  return (
    <Popup
      modal
      trigger={
        <button className="button" type="button">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-container">
          <button
            className="btn"
            type="button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="icon" />
          </button>
          <ReactPlayer url={videoUrl} className="react-video" />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
