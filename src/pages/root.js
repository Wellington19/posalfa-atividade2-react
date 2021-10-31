import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PagesDashboard from './dashboard'

export default function PagesRoot() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <PagesDashboard />
        </Route>
      </Switch>
    </Router>
  )
}
