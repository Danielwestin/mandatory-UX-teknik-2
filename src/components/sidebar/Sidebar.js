import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import FocusTrap from 'focus-trap-react';

export default function Sidebar({ closeSidebar, isOpen }) {
	return ReactDOM.createPortal(
		<FocusTrap active={isOpen}>
			<div className="Sidebar">
				{isOpen && (
					<label
						onClick={() => {
							closeSidebar(false);
						}}
						className="Sidebar__background"
					>
						<button
							aria-label="Close menu"
							className="Sidebar__background__button"
						/>
					</label>
				)}
				<nav>
					<button
						onClick={() => {
							closeSidebar(false);
						}}
					>
						<CloseIcon />
					</button>
					<ul className="Sidebar__ul">
						<li className="Sidebar__li">
							<Link
								to="/"
								onClick={() => {
									closeSidebar(false);
								}}
							>
								Main
							</Link>
						</li>

						<li className="Sidebar__li">
							<Link
								to="/stats"
								onClick={() => {
									closeSidebar(false);
								}}
							>
								Stats
							</Link>
						</li>

						<li className="Sidebar__li">
							<Link
								to="/about"
								onClick={() => {
									closeSidebar(false);
								}}
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</FocusTrap>,
		document.querySelector('body')
	);
}
