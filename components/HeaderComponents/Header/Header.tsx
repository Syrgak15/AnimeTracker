'use client'

import Link from 'next/link'
import TvIcon from '@mui/icons-material/Tv';
import './style.css'

export default function Header() {

    const headerLinks = [
        { name: 'AnimeTracker', href: '/' }
    ]

    return (
        <div className="header">
            <div className="header-logo">
                <TvIcon fontSize='large' color="action"/>
            </div>
            <div className="header-links">
                {headerLinks.map((link, id) => (
                    <div key={id}>
                        <Link
                            className="header-link"
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}