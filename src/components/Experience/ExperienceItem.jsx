import React, { Children } from 'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';

export default function ExperienceItem({
    children,
    title,
    subtitle,
    images
}) {

    const [description, projects] = Children.toArray(children)

    return (
        <Card 
            title={ title }
            subtitle={ subtitle }
            isNested={ true }
        >
            <div className='container'>
                <ImageCarousel
                    images={ images }
                />
                <div className='container-text'>
                    { description }
                </div>
            </div>
            { projects }
        </Card>
    )
}