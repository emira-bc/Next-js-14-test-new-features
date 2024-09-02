
'use client';
import React, { useEffect, useState } from "react";
import { testServerFunction } from "@/app/actions/Search";
import Menu from '@/components/menu/Menu';

const SearchBar = () => {
    const [serach, setSearch] = useState('');
    console.log('Hello ---- Client component! ----');
    useEffect(() => {
        setSearch("");
        testServerFunction();
    }, [])

    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
        testServerFunction();
    }

    return (
        <div className="search-bar">
            <Menu />
            <input onChange={handleChangeSearch} value={serach} type="text" placeholder="Search products..." />
        </div>
    )
}

export default SearchBar;