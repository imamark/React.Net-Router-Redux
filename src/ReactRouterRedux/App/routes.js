import { Route, IndexRoute } from 'react-router';

import {
  AppContainer,
  HomeContainer,
  AboutContainer,
  ContactContainer
} from './containers';

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path='about' component={AboutContainer} />
    <Route path='contact' component={ContactContainer} />
  </Route>
)
