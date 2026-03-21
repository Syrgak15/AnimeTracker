"use client"

import "./style.css";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from 'next-auth/react';
import {useState} from "react";
import { usePathname } from 'next/navigation';
import UserDropDown from "@/components/HeaderComponents/UserDropDown/UserDropDown";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "next/link";

export default function SignInButton() {
    const { data: session} = useSession();

    if (session) {
        return (
            <>
                <div className="user-info">
                    <div>
                        <Link
                            href="/profile"
                        >
                            <PersonOutlineOutlinedIcon/>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="/favorites"
                        >
                            <FavoriteBorderIcon/>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="sign-in">
            <Button
                onClick={() => signIn('google')}
                    sx={{
                        border: "none",
                        color: "var(--text-color)",
                        textTransform: "capitalize",
                        width: "100%",
                        fontWeight: "bold",
                    }}
                    disableRipple
                    variant="text">

                    Sign In
            </Button>
        </div>
    )
}