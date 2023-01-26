import React from 'react';
import '../../resources/styles/Header.css';

const Header = ({ isLightUI, setIsLightUI }) => {

    const uiChangeHandler = () => {
        setIsLightUI(!isLightUI);
    }

    const linkToResume = (
        <a 
            className='toolbar-item' 
            href='/#/resume' 
            rel="noreferrer" 
            target='_blank'
        >
            Resume
        </a>
    );

    const uiToggle = (
        <div className='toolbar-item' onClick={ uiChangeHandler }>
            { isLightUI ? 'Dark UI' : 'Light UI' }
        </div>);

    return (
        <div className='header'>
            <h1>Danny Cordoba</h1>
            <div className='toolbar'>
                { linkToResume }
                { uiToggle }
            </div>
        </div>
    )
}

export default Header