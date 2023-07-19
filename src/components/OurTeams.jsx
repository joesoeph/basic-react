import { Link } from 'react-router-dom';
import teamMembers from '../data';

function OurTeams() {
	return (
		<>
			<h1>Our Teams</h1>
			<ul>
				{teamMembers.map((value, index) => {
					return (
						<li key={index}>
							<Link to={`/team/${value.id}`}>
								{value.name} ({value.job})
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default OurTeams;
