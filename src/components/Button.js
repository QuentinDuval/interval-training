import React from 'react';

export function Button({text, onClick}) {
    return <button className="button" onClick={onClick}>
        {text}
    </button>
}
