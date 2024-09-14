"use client"

import Link from 'next/link'; // Link 컴포넌트를 임포트
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> { path == "/" ? "🎋" : "🎗"}
                </li>
                <li>
                    <Link href="/about-us">About-us</Link>
                </li>
                <button onClick={()=> setCount((c) => c + 1)}>{count}</button>
            </ul>
        </nav>
    );
}