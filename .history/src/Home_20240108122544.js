const Home = () => {
    const handleClick = () => {
        console.log('hello,world')
    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button> Click me again</button>
        </div>
    );
}

export default Home;