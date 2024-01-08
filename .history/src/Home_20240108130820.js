import { useState } from "react";

const Home = () => {

    const handleClick = () => {
        console.log('hello,world')
    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;