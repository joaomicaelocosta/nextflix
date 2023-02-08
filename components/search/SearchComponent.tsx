'use client';

import { FormEventHandler, useState } from "react";

import './SearchComponent.scss'

export default function Search(props: { handleChange: any }){
    const [query, setQuery] = useState('');

    return (
        <form onSubmit={props.handleChange} className="form">
            <input type="text" placeholder="Movie" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}