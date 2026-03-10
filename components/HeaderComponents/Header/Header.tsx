"use client"

import Link from 'next/link'
import './style.css'
import useScrollDirection from '@/hooks/useScrollDirection/useScrollDirection';
import SignInButton from "@/components/HeaderComponents/SignInButton/SignInButton";

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
            <div className="header-login">
                <SignInButton/>
            </div>
        </div>
    )
}