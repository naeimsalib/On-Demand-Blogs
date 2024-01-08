const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> The On Demand Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;