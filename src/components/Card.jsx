import React from 'react';
import '../resources/styles/Card.css';

export default function Card({ 
    children, 
    title,
    subtitle = undefined,
    stickyHeader=false, 
    isNested=false
}) {
    const headerClass = stickyHeader ? 'card-header sticky with-padding' : 'card-header';
    const cardClass = isNested ? 'sub-card' : 'card';

    const getTitle = () => {
        return isNested ? (
            <h3 className='card-title'>{title}</h3>
        ) : (
            <h1 className='card-title'>{title}</h1>
        )
    }

    const getSubtitle = () => {
        if (subtitle !== undefined) {
            if (isNested) {
                return <em><h5 className='card-title'>{subtitle}</h5></em>
            } else {
                return <h3 className='card-title'>{subtitle}</h3>
            }
        }
        return
    }

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