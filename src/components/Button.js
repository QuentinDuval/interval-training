import React from 'react';

export function Button({text, onClick}) {
    return <button onClick={onClick}>
        {text}
    </button>
}
