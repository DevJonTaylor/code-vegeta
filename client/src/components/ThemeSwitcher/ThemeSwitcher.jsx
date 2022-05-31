import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeSwitcher = () => {
    useEffect(() => {
        themeChange(false)
    }, []);

    const themes = ["synthwave", "retro", "cyberpunk", "halloween", "aqua", "wireframe", "luxury", "dracula", "business", "acid", "night", "coffee", "winter"];

    return (
        <div className='dropdown'>
            <label tabIndex="0" className="sidebar-icon">Theme</label>
            <ul tabIndex="0" className='dropdown-content menu p-0 shadow bg-base-100 rounded-box w-48'>
                {themes.map((theme) => {
                    return <li><button data-set-theme={theme} data-act-class="ACTIVECLASS">{theme.toUpperCase()}</button></li>
                })}
            </ul>
        </div>
    )
}

export default ThemeSwitcher;