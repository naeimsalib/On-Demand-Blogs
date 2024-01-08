const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> The On Demand Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="New-Blog-Nav">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;