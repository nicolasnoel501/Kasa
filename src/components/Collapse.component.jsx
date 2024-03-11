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
                <i className={`fa-solid fa-angle-${isCollapsed ? 'up' : 'down'}`}></i>
            </header>
            {!isCollapsed && (
                <div className='collapse__text'>
                    <p>{props.content}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
