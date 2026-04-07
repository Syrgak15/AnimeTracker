"use client"

import Link from 'next/link'
import './style.css'
import useScrollDirection from '@/hooks/useScrollDirection/useScrollDirection';
import SignInButton from "@/components/HeaderComponents/SignInButton/SignInButton";
import AudioPlayer from "@/components/HeaderComponents/AudioPlayer/AudioPlayer";
import {useEffect, useState} from "react";
import Drawer from '@/components/MUI-components/Drawer/Drawer';

export default function Header() {
    const scrollDirection = useScrollDirection();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    const headerLinks = [
        { name: 'Producers', href: '/producers' },
    ]

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth !== windowSize.width) {
                setWindowSize({
                    width: window.innerWidth,
                });
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
        });

    return (
        <div className={`header scroll-${scrollDirection}`}>
            <div className="header-links">
                {windowSize.width > 768 ? (
                    headerLinks.map(link => (
                        <Link className="header-link" href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    ))
                ) : (
                    <Drawer headerLinks={headerLinks}/>
                )}
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