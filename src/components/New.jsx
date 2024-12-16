import { useState } from 'react';

export default function MyApplic() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <NewButton />
            <NewButton />
        </div>
    );
}

function NewButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
