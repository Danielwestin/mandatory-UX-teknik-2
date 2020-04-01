import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import FocusTrap from 'focus-trap-react';
import { slideIn, slideOut } from '../Utilities/animation';

export default function Sidebar({ closeSidebar, isOpen }) {
	const sidebarRef = useRef(null);

	useEffect(() => {
		slideIn(sidebarRef.current);
	}, []);

	return ReactDOM.createPortal(
		<FocusTrap active={isOpen}>
			<aside className="Sidebar">
				{isOpen && (
					<label
						onClick={() => {
							slideOut(sidebarRef.current, () => {
								closeSidebar(false);
							});
						}}
						className="Sidebar__background"
					>
						<button
							aria-label="Close menu"
							className="Sidebar__background__button"
						/>
					</label>
				)}
				<nav className="nav" ref={sidebarRef}>
					<div
						className="nav__closeWrapper"
						aia-label="to wrapp the closeButton"
					>
						<button
							className="nav__closeWrapper__button"
							onClick={() => {
								slideOut(sidebarRef.current, () => {
									closeSidebar(false);
								});
							}}
							aria-label="Close menu"
						>
							<CloseIcon />
						</button>
					</div>

					<ul className="Sidebar__ul">
						<li className="Sidebar__li">
							<NavLink
								exact
								className="Sidebar__li__Link"
								activeClassName="Sidebar__li__Link--active"
								to="/"
								onClick={() => {
									slideOut(sidebarRef.current, () => {
										closeSidebar(false);
									});
								}}
							>
								Main
							</NavLink>
						</li>

						<li className="Sidebar__li">
							<NavLink
								className="Sidebar__li__Link"
								activeClassName="Sidebar__li__Link--active"
								to="/stats"
								onClick={() => {
									slideOut(sidebarRef.current, () => {
										closeSidebar(false);
									});
								}}
							>
								Stats
							</NavLink>
						</li>

						<li className="Sidebar__li">
							<NavLink
								className="Sidebar__li__Link"
								activeClassName="Sidebar__li__Link--active"
								to="/about"
								onClick={() => {
									slideOut(sidebarRef.current, () => {
										closeSidebar(false);
									});
								}}
							>
								About
							</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		</FocusTrap>,
		document.querySelector('body')
	);
}
