"use client"

import Link from 'next/link'
import './style.css'
import useScrollDirection from '@/hooks/useScrollDirection/useScrollDirection';
import SignInButton from "@/components/HeaderComponents/SignInButton/SignInButton";
import AudioPlayer from "@/components/HeaderComponents/AudioPlayer/AudioPlayer";
import Drawer from '@/components/MUI-components/Drawer/Drawer';

export default function Header() {
    const scrollDirection = useScrollDirection();
    const headerLinks = [
        { name: 'Producers', href: '/producers' },
        { name: 'FAQ', href: '/faq'},
    ]
    return (
        <div className={`header scroll-${scrollDirection}`}>
            <div className="header-links">
                <div className="header-link header-links-desktop">
                    {headerLinks.map(link => (
                        <Link style={{textDecoration: "none", color: "inherit"}} href={link.href} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div className="header-link header-links-mobile">
                    <Drawer headerLinks={headerLinks}/>
                </div>
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