import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../sidebar/Sidebar';

export default function Header() {
	const [ openSidebar, setOpenSidebar ] = useState(false);

	return (
		<React.Fragment>
			{openSidebar && <Sidebar closeSidebar={setOpenSidebar} />}
			<header className="Header">
				<button
					className="Header__menu-icon"
					onClick={() => setOpenSidebar(true)}
				>
					<MenuIcon />
				</button>
				<h1>Quiz</h1>
			</header>
		</React.Fragment>
	);
}
