import React, { Children } from 'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';

export default function ExperienceItem({
    children,
    title,
    subtitle
}) {

    const [images, description, projects] = Children.toArray(children)

    return (
        <Card 
            title={ title }
            subtitle={ subtitle }
            isNested={ true }
        >
            <div className='container'>
                <div className='container-text'>
                    { description }
                </div>
                <ImageCarousel>
                    { images }
                </ImageCarousel>
            </div>
            { projects }
        </Card>
    )
}