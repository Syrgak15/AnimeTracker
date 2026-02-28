"use client"

import * as React from 'react';
import "./style.css"
import {useState} from "react";

export default function Tabs() {

    const [activeTab, setActiveTab] = useState<number>(0);

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