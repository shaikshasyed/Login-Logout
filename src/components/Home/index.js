import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="home-container">
          <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
          <img
            className="digital-card-image"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </div>
      </div>
    </>
  )
}

export default Home
