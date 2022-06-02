import Explore from '../views/pages/explore';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Signup from '../views/pages/signup';
import Recommendation from '../views/pages/recommendation';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/explore/:id': Explore,
  '/explore': Explore,
  '/login': Login,
  '/signup': Signup,
  '/recommendation': Recommendation,
};

export default routes;
