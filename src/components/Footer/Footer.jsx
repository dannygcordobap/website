import React, { useState } from 'react';
import '../../resources/styles/Footer.css';
import FooterItem from './FooterItem';
import copy from '../../resources/icons/copy.svg';
import check from '../../resources/icons/check.svg'
import Icon from '../Icon';

export default function Footer() {

    const [activeIcon, setActiveIcon] = useState(copy)

    const copyHandler = () => {
        if (activeIcon === copy) {
            navigator.clipboard.writeText('dannygcordobap@gmail.com');
            setActiveIcon(check);
            new Promise(resolve => setTimeout(resolve, 1500))
                .then(() => {setActiveIcon(copy)})
        }
    }

    return (
        <div className='footer'>
            <FooterItem title='Contact'>
                dannygcordobap@gmail.com
                <Icon src={ activeIcon } alt='copy' handler={copyHandler} />
            </FooterItem>
            <FooterItem title='Social Links'>
                <a href='https://www.linkedin.com/in/dannygcordobap/' target='_blank'>
                    LinkedIn
                </a>
                
                <a href='https://github.com/dannygcordobap' target='_blank'>
                    GitHub
                </a>
            </FooterItem>
        </div>
    )
}