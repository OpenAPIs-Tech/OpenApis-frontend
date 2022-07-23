import React, { useContext } from 'react';
import { NavContext } from '../../context/NavContext';

const NavLink = ({ navLinkId, scrollToId, onClick, changeStatus }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
		onClick()
		changeStatus()
	};

	return (
		<li
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass nav-links' : 'nav-links'}
			onClick={handleClick}

		>
			{navLinkId}
		</li>
	);
};

export default NavLink;