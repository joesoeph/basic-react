import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import DetailTeam from './pages/DetailTeam';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/team',
		element: <Team />,
	},
	{
		path: '/team/:id',
		element: <DetailTeam />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

function Routes() {
	return <RouterProvider router={router} />;
}

export default Routes;
