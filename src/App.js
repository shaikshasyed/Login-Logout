import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={LoginPage} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </>
)

export default App
