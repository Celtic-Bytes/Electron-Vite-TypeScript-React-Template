import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
        const message = "hello from renderer";
        console.log(window.key1.sendMessage(message));
    };

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleClick}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
