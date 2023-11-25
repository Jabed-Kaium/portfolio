
const Navbar = () => {

    return (
        <>
            <div className="nav-bg">
                <nav className="navbar navbar-expand-lg py-3 container-fluid">
                    <div className="container">
                        <p className="logo my-auto">
                            JK.
                        </p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#About">About Me</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#Skills">Skills</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#Projects">Projects</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Navbar