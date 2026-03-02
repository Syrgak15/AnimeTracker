"use client"

import React, { Dispatch, SetStateAction } from 'react';
import "./style.css"

interface ChildProps {
    setActiveTab: Dispatch<SetStateAction<number>>;
    activeTab: number;
}

export default function Tabs({setActiveTab, activeTab}:ChildProps) {

    return (
        <div className="tabs">
            <div onClick={() => setActiveTab(0)} className={`tab ${activeTab === 0 ? 'active' : ''}`}>
                <span>Current Season</span>
            </div>
            <div onClick={() => setActiveTab(1)} className={`tab ${activeTab === 1 ? 'active' : ''}`}>
                <span>Upcoming Episodes</span>
            </div>
        </div>
    );
}