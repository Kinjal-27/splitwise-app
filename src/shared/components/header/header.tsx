import React from 'react';
import Logo from 'assets/images/scully.png';

const Header = () => {
	return (
		<div className='header-wrapper'>
			<div className='flex align-items--center'>
				<img src={Logo} alt='sp;itwise-app-logo' className='logo-img' />
				<h3 className='title text--uppercase'>Splitio</h3>
			</div>
		</div>
	);
};

export default Header;
