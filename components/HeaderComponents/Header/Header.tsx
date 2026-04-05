"use client"

import Link from 'next/link'
import './style.css'
import useScrollDirection from '@/hooks/useScrollDirection/useScrollDirection';
import SignInButton from "@/components/HeaderComponents/SignInButton/SignInButton";
import AudioPlayer from "@/components/HeaderComponents/AudioPlayer/AudioPlayer";

export default function Header() {
    const scrollDirection = useScrollDirection();
    return (
        <div className={`header scroll-${scrollDirection}`}>
            <div className="header-links">
                <Link className="header-link" href="/producers">
                    Producers
                </Link>
            </div>

            <div className="header-center">
                <Link className="header-link" href="/">
                    Anira
                </Link>
            </div>

            <div className="header-login">
                <AudioPlayer/>
                <SignInButton/>
            </div>
        </div>
    )
}