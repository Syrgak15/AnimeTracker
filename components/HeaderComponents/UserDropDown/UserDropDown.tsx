"use client"

import Link from "next/link"
import { signOut } from 'next-auth/react';
import {Dispatch, SetStateAction} from 'react';
import { usePathname } from 'next/navigation';
import "./style.css"

interface ChildProps {
    isClicked: boolean;
    setIsClicked: Dispatch<SetStateAction<boolean>>;
}

export default function UserDropDown({isClicked, setIsClicked}: ChildProps) {
    const pathname = usePathname();

    return (
        <div className={`user-dropdown`}>
            <div className={`dropdown-item ${pathname === "/profile" ? "hidden" : ""}`} onClick={() => setIsClicked(!isClicked)}>
                <Link
                    href="/profile"
                    className="dropdown-link"
                >
                    Profile
                </Link>
            </div>
            <div className={`dropdown-item ${pathname === "/favorites" ? "hidden" : ""}`} onClick={() => setIsClicked(!isClicked)}>
                <Link
                    href="/favorites"
                    className="dropdown-link"
                >
                    Favorites
                </Link>
            </div>
            <div
                className="dropdown-item"
                onClick={() => signOut()}
            >
                Sign out
            </div>
        </div>
    )
}