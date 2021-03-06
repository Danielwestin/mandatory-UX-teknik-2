import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../sidebar/Sidebar';

export default function Header() {
	const [ openSidebar, setOpenSidebar ] = useState(false);

	return (
		<React.Fragment>
			{openSidebar && (
				<Sidebar closeSidebar={setOpenSidebar} isOpen={openSidebar} />
			)}
			<header className="Header">
				<button
					aria-label="open-menu"
					className="Header__menu-icon"
					onClick={() => setOpenSidebar(true)}
				>
					<MenuIcon />
				</button>
				<h1>Trivia</h1>
			</header>
		</React.Fragment>
	);
}
