import Explore from '../views/pages/explore';
import Home from '../views/pages/home';
import Signin from '../views/pages/signin';
import Signup from '../views/pages/signup';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/explore': Explore,
  '/signin': Signin,
  '/signup': Signup,
};

export default routes;
