import Explore from '../views/pages/explore';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Signup from '../views/pages/signup';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/explore/:id': Explore,
  '/explore': Explore,
  '/login': Login,
  '/signup': Signup,
};

export default routes;
