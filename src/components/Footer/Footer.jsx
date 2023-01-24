import React from 'react';
import '../../resources/styles/Footer.css';
import FooterItem from './FooterItem';

export default function Footer() {

    return (
        <div className='footer'>
            <FooterItem title='Contact'>
                dannygcordobap@gmail.com
            </FooterItem>
            <FooterItem title='Social Links'>
                <a href='https://www.linkedin.com/in/dannygcordobap/' rel="noreferrer" target='_blank'>
                    LinkedIn
                </a>
                
                <a href='https://github.com/dannygcordobap' rel="noreferrer" target='_blank'>
                    GitHub
                </a>
            </FooterItem>
        </div>
    )
}