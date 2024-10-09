import './index.css'

const VisitedCountries = props => {
  const {visitedCountriesList, onRemoveItem} = props
  const {id, name, imageUrl} = visitedCountriesList

  const onClickRemove = () => {
    onRemoveItem(id)
  }

  return (
    <li className="visited-list-container">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="remove-button-container">
        <p className="visited-country-name">{name}</p>
        <button className="remove-button" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
