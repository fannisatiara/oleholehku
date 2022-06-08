import Explore from '../views/pages/explore';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Recommendation from '../views/pages/recommendation';
import About from '../views/pages/about';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/explore/:id': Explore,
  '/explore': Explore,
  '/login': Login,
  '/recommendation': Recommendation,
};

export default routes;
