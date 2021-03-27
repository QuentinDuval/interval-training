import React from 'react';

export function Button({text, onClick, isInner = false}) {
    return <div className={isInner ? "button-inner" : ""}>
        <button className="button" onClick={onClick}>
            {text}
        </button>
    </div>;
}


export function ButtonGroup({children}) {
    let new_children = React.Children.map(children, (c) => React.cloneElement(c, {isInner: true}));
    return <div className="button-group">
        {new_children}
    </div>
}
