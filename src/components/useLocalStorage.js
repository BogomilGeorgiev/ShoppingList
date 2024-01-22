import { useEffect, useState } from "react"

export function useLocalStorage(initalState, key) {

    const [value, setValue] = useState(() => {

        const storedValue = localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : initalState
    })

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value]);

    return [value, setValue]
}