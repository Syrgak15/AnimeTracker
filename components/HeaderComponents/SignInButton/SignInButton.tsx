"use client"

import "./style.css";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from 'next-auth/react';
import {useState} from "react";
import UserDropDown from "@/components/HeaderComponents/UserDropDown/UserDropDown";
import Image from 'next/image'

export default function SignInButton() {
    const { data: session} = useSession();
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    if (session) {
        return (
            <>
                <div className="user-info" onClick={handleClick}>
                    <span>{session.user?.name}</span>
                </div>
                {isClicked && <UserDropDown isClicked={isClicked} setIsClicked={setIsClicked}/>}
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