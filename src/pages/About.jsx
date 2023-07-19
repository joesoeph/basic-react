import { Link } from 'react-router-dom';
import OurTeams from '../components/OurTeams';
import Preface from '../components/Preface';

function About() {
	return (
		<>
			<h1>About Page</h1>
			<Preface />
			<OurTeams />
			<Link to='/'>Back to Home</Link>
			<br />
			<Link to='/dsfsggf'>Not found page</Link>
		</>
	);
}

export default About;
