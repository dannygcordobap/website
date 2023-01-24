import React from 'react';
import '../resources/styles/Card.css';

export default function Card({ 
    children, 
    title,
    rightHeaderContent = undefined,
    subtitle = undefined,
    stickyHeader=false, 
    isNested=false
}) {
    const headerClass = stickyHeader ? 'sticky with-padding' : 'card-header';
    const cardClass = isNested ? 'sub-card' : 'card';

    const getTitle = () => {
        let titleHeading = isNested ? (
            <h3 className='card-title'>{title}</h3>
        ) : (
            <h2 className='card-title'>{title}</h2>
        );

        return rightHeaderContent ? (
            <div className='card-title'>
                {titleHeading}
                <div className="header-extra">
                    {rightHeaderContent}
                </div>
            </div>
        ) : (
                <div className='card-title'>
                    {titleHeading}
                </div>
            );
    };

    const getSubtitle = () => {
        if (subtitle !== undefined) {
            if (isNested) {
                return <em><h5 className='card-title'>{subtitle}</h5></em>;
            } else {
                return <h3 className='card-title'>{subtitle}</h3>;
            }
        }
        return;
    };

    return (
        <div className={cardClass}>
            <div className={headerClass}>
                {getTitle()}
                {getSubtitle()}
            </div>
            <div className={isNested ? 'card-content' : 'card-content with-padding'}>
                {children}
            </div>
        </div>
    )
}