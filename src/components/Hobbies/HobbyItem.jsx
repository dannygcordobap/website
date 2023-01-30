import React from 'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';

export default function HobbyItem({
    children,
    title,
    images
}) {

    return (
        <Card 
            title={ title }
            isNested={ true }
        >
            <div className='container'>
                <ImageCarousel images={images} />
                <div className='container-text'>
                    { children }
                </div>
            </div>
        </Card>
    )
}