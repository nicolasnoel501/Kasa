import React, { useState } from 'react';

const Collapse = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='collapse__container'>
            <header className='collapse__header' onClick={toggleCollapse}>
                <h3>{props.title}</h3>
                <i className={`fa-solid fa-angle-${isCollapsed ? 'down' : 'up'}`}></i>
            </header>
            {!isCollapsed && (
                <div className='collapse__text'>
                    {props.content.type === 'paragraph' ? (
                        <p>{props.content.text}</p>
                    ) : (
                        <ul>
                            {props.content.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default Collapse;
