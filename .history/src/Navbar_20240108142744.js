const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> The On Demand Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <div className="New-Blog-Nav">
                    <a href="/create"> New Blog</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;