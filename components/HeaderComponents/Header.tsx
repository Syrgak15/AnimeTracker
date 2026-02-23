'use client'

import Link from 'next/link'
import TvIcon from '@mui/icons-material/Tv';

export default function Header() {
    return (
        <div className="header flex items-center justify-between text-white font-medium font-mono">
            <div className="header-link pt-1">
                <div className="logo flex items-center gap-3">
                    <TvIcon fontSize="large"/>
                    <Link href="/">
                        AnimeTracker
                    </Link>
                </div>
            </div>

            <div className="header-link">
                <Link href="/current-season">
                    Current Season
                </Link>
            </div>

            <div className="header-link">
                <Link href="/upcoming-episodes">
                    Upcoming Episodes
                </Link>
            </div>
        </div>
    )
}