const Home = () => {
    const handleClick = (e) => {
        console.log('hello,world')
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => { handleClickAgain('Naeim Salib') }}> Click me again</button>
        </div>
    );
}

export default Home;