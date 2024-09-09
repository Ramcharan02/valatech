import '../Styles/header.css'

function Header() {
    return (
        <header className="header" id='Home'>
            {/* <img src="logo.png" alt="Company Logo" className="logo" />*/}
            <nav> 
                <ul className="Navb">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className='name'>
                <h1>VALA TECH</h1>
                <p>FOR TECHNOLOGY AND HUMAN RESOURCES</p>
            </div>
            <div className="header-button">
        {/* <button className="ct-button">Connect</button> */}
      </div>
        </header>
    );
}

export default Header;
