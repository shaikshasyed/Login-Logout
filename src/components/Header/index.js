import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          className="logo-design"
          alt="website logo"
        />
      </Link>
      <button type="button" className="logout-button" onClick={logout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
