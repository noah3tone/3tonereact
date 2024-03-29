import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/img/artistandlabelservices.png";

const Header = ({children, ...props}) => {

    //let displayName = props.isLoggedin ? props.username: "Guest";
	const {page} = props;

	let isHome = false;
	if(page === "Home"){
		isHome = true;
	}
	
	const [showMenu, setShowMenu] = useState(false);
	const handleClick = () => {
		setShowMenu(!showMenu);
	}   
	const burgerClassName = `burger-list${
        showMenu ? "--anim" : ""
    }`

    return(
        <header className="header">
            <button id="header__burger" className="header__burger"  onClick={handleClick}>
				<div className="header__burger__container" id="burger-open">
					<svg aria-hidden="true" role="img" className="iconify iconify--openmoji" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 72" id="burger" data-icon="openmoji:hamburger-menu">
						<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16 26h40M16 36h40M16 46h40"></path>
					</svg>
				</div>
				<nav className={burgerClassName} id="burger-list">
					{isHome ? "" : <><a className="nav-item" href="Home">Home</a><p className="desktop-only">|</p></>}
					<a className="nav-item" href="my-account">My Account</a><p className="desktop-only">|</p>
					<a className="nav-item" id="nav-login" href='Login'>Login</a><p className="desktop-only">|</p>
					<a className="nav-item" id="nav-login" href='SupportPage'>Support</a>
				</nav>
			</button>

			<div className="header__logo">
				<a href="/Home" className="header__logo__home-link">
					<img id="center-logo" className="header-img-centered" src={logo} alt="3tone Music"></img>
				</a>
			</div>

			<div className="header__socials">
				<script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
				<a className="header__socials__nav-item" id="amplify" href="https://amplify.link/">
					<svg className="iconify" width="130" height="200" viewBox="0 0 130 200">
						<path d="M63.26,192.67l-16.04-61.37c-2.21-8.44-9.84-14.51-18.57-14.75l-28.64-.79L63.02,0l16.04,61.37c2.21,8.44,9.84,14.51,18.57,14.75l28.64,.79-63.02,115.76ZM27.57,99.89l1.53,.04c16.07,.44,30.13,11.61,34.2,27.17l5.43,20.75,29.98-55.07-1.53-.04c-16.07-.44-30.13-11.61-34.2-27.17l-5.43-20.75-29.97,55.07Z"></path>
					</svg>
				</a>
				<a className="header__socials__nav-item" href="https://www.tiktok.com/discover/3tonemusic">
					<svg aria-hidden="true" role="img" className="iconify" width="1em" height="1em" viewBox="0 0 24 24" data-icon="bxl:tiktok">
						<path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
					</svg>

				</a>
				<a className="header__socials__nav-item" href="https://www.instagram.com/3tonemusic/">
					<svg aria-hidden="true" role="img" className="iconify" width="1em" height="1em" viewBox="0 0 24 24" data-icon="akar-icons:instagram-fill">
						<path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" clip-rule="evenodd"></path>
					</svg>
				</a>
				<a className="header__socials__nav-item" href="https://twitter.com/3tonemusic">
				<svg aria-hidden="true" role="img" className="iconify" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="akar-icons:twitter-fill">
					<path fill="currentColor" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"></path>
				</svg>
				</a>
				<a className="header__socials__nav-item" href="https://www.facebook.com/3tonemusicofficial/">
					<svg aria-hidden="true" role="img" className="iconify iconify--akar-icons" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="akar-icons:facebook-fill">
						<path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z" clip-rule="evenodd"></path>
					</svg>
				</a>
			</div>
        </header>
    )
}

export default Header;