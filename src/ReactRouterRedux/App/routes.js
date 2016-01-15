import { Route, IndexRoute } from 'react-router';

import {
  Layout,
  Home,
  About,
  Contact
} from './views';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='contact' component={Contact} />
  </Route>
)
