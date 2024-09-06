
'use client';
import React, { useEffect, useState } from "react";
import { testServerFunction } from "@/app/actions/Search";

const SearchBar = () => {
    const [serach, setSearch] = useState('');
    console.log('Hello ---- Client component! ----');
    useEffect(() => {
        setSearch("test search");
        testServerFunction();
    }, [])

    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
        testServerFunction();
    }

    return (
        <div className="search-bar">
            <input onChange={handleChangeSearch} value={serach} type="text" placeholder="Search products..." />
        </div>
    )
}

export default SearchBar;