import Explore from '../views/pages/explore';
import Home from '../views/pages/home';
import SignIn from '../views/pages/signin';
import Recommendation from '../views/pages/recommendation';
import About from '../views/pages/about';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/explore/:id': Explore,
  '/explore': Explore,
  '/signin': SignIn,
  '/recommendation': Recommendation,
};

export default routes;
