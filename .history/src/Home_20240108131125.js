import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Naeim');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Naeim Salib')
    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} Years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;