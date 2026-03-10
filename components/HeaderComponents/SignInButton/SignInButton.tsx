"use client"

import "./style.css";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignInButton() {

    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (session) {
        return (
            <div>
                <p>Welcome, {session.user?.name}!</p>
                {session.user?.image && (
                    <div>Welcome</div>
                )}
                <button onClick={() => signOut()}>Sign out</button>
            </div>
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