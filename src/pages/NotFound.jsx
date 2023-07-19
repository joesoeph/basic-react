import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<>
			<h1>404</h1>
			<Link to='/'>Back to Home Page</Link>
		</>
	);
}

export default NotFound;
