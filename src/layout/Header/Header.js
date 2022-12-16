import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import logo from '../../assets/logo.png';
import "./Header.scss";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
    <div className="nav">
		<header>
			<img className="logo" src={logo} alt="logo" />
			<nav ref={navRef}>
				<a href="/#">О НАС</a>
				<a href="/#">НАШИ РАБОТЫ</a>
				<a href="/#">ПАРТНЕРЫ</a>
				<a href="/#">НАША КОМАНДА</a>
        <a href="/#">КОНТАКТЫ</a>
        <div className="search-lang">
        <span className="search">
        <SearchOutlined />
        </span>
        <a href="/#">ENG</a>
        </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<CloseOutlined />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
      <MenuOutlined />
			</button>
		</header>
    </div>
	);
}

export default Navbar;


