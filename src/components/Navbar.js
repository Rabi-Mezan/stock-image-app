import React from 'react';


function Navigation() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* remove all links except HOME */}
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                    Home
                </a>
            </li>
        </ul>
    )
}

function SearchForm() {
    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
        </form>
    )
}

function Dropdown() {
    return (<ul className="navbar-nav mb-2 mb-lg-0">
        {" "}
        {/* remove ms-auto */}
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Login
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/">Profile</a></li>
                <li><a class="dropdown-item" href="/">My Gallery</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="/">Logout</a></li>
            </ul>
        </li>
    </ul>)
}


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid ">
                    <a class="navbar-brand fw-bold" href="/">Pure<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>Stock</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Navigation />
                        <Dropdown />
                        <SearchForm />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;