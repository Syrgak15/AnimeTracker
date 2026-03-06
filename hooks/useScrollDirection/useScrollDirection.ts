import {useEffect, useRef, useState} from "react";

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState('up')
    const prevOffset = useRef(0);

    const toggleScrollDirection = () => {
        const scrollY = window.scrollY;

        if (scrollY > prevOffset.current) {
            setScrollDirection('down');
        } else if (scrollY < prevOffset.current) {
            setScrollDirection('up');
        }

        prevOffset.current = scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleScrollDirection)
        return () => {
            window.removeEventListener('scroll', toggleScrollDirection)
        }
    }, [])
    return scrollDirection;
}

export default useScrollDirection;