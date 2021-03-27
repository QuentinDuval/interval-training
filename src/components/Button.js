import React from 'react';

export function Button({text, onClick, className, isInner = false}) {
    let buttonClassName = "button";
    if (className !== undefined);
        buttonClassName += " " + className;
    return <div className={isInner ? "button-inner" : ""}>
        <button className={buttonClassName} onClick={onClick}>
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
