// import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import teamMembers from '../data';

function DetailTeam() {
	const params = useParams();

	const detail = teamMembers.filter((member) => member.id === params.id);

	return (
		<>
			<h1>Detail Team</h1>
			<h3>
				{detail[0].name} <small>({detail[0].job})</small>
			</h3>

			<Link to='/'>Back to Home</Link>
		</>
	);
}

export default DetailTeam;
