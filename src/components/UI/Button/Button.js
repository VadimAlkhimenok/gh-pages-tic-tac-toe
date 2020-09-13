import React from 'react';

export const Button = ({ onClick, name, className }) => {
    return (
        <button 
            className={className}
            onClick={() => onClick()}
        >
            { name }
        </button>
    )
}