// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayActiveThumbNail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickThumbnailButton = () => {
    displayActiveThumbNail(id)
  }
  const activeThumbnailClassName = isActive ? '' : 'apply-opacity-class'
  return (
    <li className="list-item">
      <button
        type="button"
        className={`image-alignment ${activeThumbnailClassName}`}
        onClick={onClickThumbnailButton}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
