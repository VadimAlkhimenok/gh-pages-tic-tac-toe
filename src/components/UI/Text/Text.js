import React from 'react';

export const Text = ({ title, className, counter }) => {
    return (
        <p><strong>{ title }: </strong><span className={ className }>{ counter }</span> time(s)</p>
    )
}