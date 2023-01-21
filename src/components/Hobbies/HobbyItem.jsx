import React, { Children } from 'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';

export default function ExperienceItem({
    children,
    title,
    subtitle
}) {

    const [images, description] = Children.toArray(children)

    return (
        <Card 
            title={ title }
            subtitle={ subtitle }
            isNested={ true }
        >
            <div className='container'>
                { description }
                <ImageCarousel>
                    { images }
                </ImageCarousel>
            </div>
        </Card>
    )
}