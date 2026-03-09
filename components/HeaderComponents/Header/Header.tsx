"use client"

import Link from 'next/link'
import './style.css'
import useScrollDirection from '@/hooks/useScrollDirection/useScrollDirection';

export default function Header() {
    const scrollDirection = useScrollDirection()


    return (
        <div className={`header scroll-${scrollDirection}`}>
            <div className="header-links">
                <div className="header-logo">

                </div>
                <Link
                    className="header-link"
                    href="/"
                >
                    Anira
                </Link>
            </div>
        </div>
    )
}