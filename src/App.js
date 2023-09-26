import {Route, Switch, Redirect} from 'react-router-dom'

import About from './components/About'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App