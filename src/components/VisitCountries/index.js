import {Component} from 'react'
import VisitedCountries from '../VisitedCountries'
import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountries extends Component {
  state = {
    visitedCountriesList: initialCountriesList.filter(
      eachCountries => eachCountries.isVisited === true,
    ),
    visitCountriesList: initialCountriesList,
  }

  onRemoveItem = id => {
    this.setState(prevState => {
      const modifiedVisitedCountriesList =
        prevState.visitedCountriesList.filter(
          eachCountries => eachCountries.id !== id,
        )

      const modifiedVisitCountriesList = prevState.visitCountriesList.map(
        eachCountries => {
          if (eachCountries.id === id) {
            return {...eachCountries, isVisited: false}
          }
          return eachCountries
        },
      )

      return {
        visitCountriesList: modifiedVisitCountriesList,
        visitedCountriesList: modifiedVisitedCountriesList,
      }
    })
  }

  onClickVisit = id => {
    this.setState(prevState => {
      const updatedcountriesList = prevState.visitCountriesList.map(
        countries => {
          if (countries.id === id) {
            return {...countries, isVisited: true}
          }

          return countries
        },
      )

      const updatedVisitedCountriesList = prevState.visitedCountriesList.concat(
        updatedcountriesList.find(countries => countries.id === id),
      )

      return {
        visitCountriesList: updatedcountriesList,
        visitedCountriesList: updatedVisitedCountriesList,
      }
    })
  }

  render() {
    const {visitedCountriesList, visitCountriesList} = this.state
    console.log(visitedCountriesList)
    const isEmpty = visitedCountriesList.length === 0

    return (
      <div className="visit-countries-bg-container">
        <h1 className="main-heading">Countries</h1>
        <ul className="countries-ul-list">
          {visitCountriesList.map(eachCountries => (
            <li key={eachCountries.id} className="countries-list-item">
              <p className="country-name">{eachCountries.name}</p>
              {eachCountries.isVisited ? (
                <p className="visited">Visited</p>
              ) : (
                <button
                  type="button"
                  className="visit-button"
                  onClick={() => this.onClickVisit(eachCountries.id)}
                >
                  Visit
                </button>
              )}
            </li>
          ))}
        </ul>
        <h1 className="main-heading">Visited Countries</h1>
        <div className="visited-container">
          {isEmpty ? (
            <p className="description">No Countries Visited Yet</p>
          ) : (
            <ul className="visited-ul-container">
              {visitedCountriesList
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map(eachCountries => (
                  <VisitedCountries
                    key={eachCountries.id}
                    visitedCountriesList={eachCountries}
                    onRemoveItem={this.onRemoveItem}
                  />
                ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default VisitCountries
