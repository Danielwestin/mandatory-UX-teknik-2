import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

export default function sidebar({ closeSidebar }) {
	return ReactDOM.createPortal(
		<nav>
			<button
				onClick={() => {
					closeSidebar(false);
				}}
			>
				<CloseIcon />
			</button>
			<ul>
				<li>
					<Link to="/"> Main </Link>
				</li>
				<li>
					<Link to="/stats">Stats</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>,
		document.querySelector('body')
	);
}
