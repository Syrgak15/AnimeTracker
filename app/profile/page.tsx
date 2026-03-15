"use client"

import "./style.css"
import { useSession, signOut } from 'next-auth/react';
import { getFavorites } from "../services/favorites/getFavorites";
import Skeleton from "@/components/MUI-components/Skeleton/Skeleton";

export default function ProfilePage() {
    const {data: session, status} = useSession();

    if (status === "loading") {
        return (
            <Skeleton/>
        )
    }

    if(status !== "authenticated") {
        return (
            <p>You are not authorized to view this page!</p>
        )
    }


    return (
        <div className="profile">
            <div className="profile__content">

                <div className="profile__title">
                    <span>
                        Profile
                        <p>Settings of your profile</p>
                    </span>
                    <div
                        className="profile__sign-out"
                        onClick={() => signOut({redirectTo: "/"})}
                    >
                        Sign out
                    </div>
                </div>

                <div className="profile__title">
                    <span>Information about account</span>
                </div>


                <div className="profile__info">
                    <div className="profile__info-name">
                        <label className="profile__info-label">Username</label>
                        <div className="profile__name">
                            <span>{session?.user?.name}</span>
                        </div>
                        <p>Username cannot be changed</p>
                    </div>

                    <div className="profile__info-email">
                        <label className="profile__info-label">Email address</label>
                        <div className="profile__email">
                            <span>{session?.user?.email}</span>
                        </div>
                        <p>Email cannot be changed</p>
                    </div>
                </div>

            </div>
        </div>
    )
}