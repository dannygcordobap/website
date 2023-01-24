import React, { Children } from 'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';

export default function ExperienceItem({
    children,
    title,
    subtitle,
    src = undefined,
    alt = undefined,
    caption = undefined
}) {

    const [description, projects] = Children.toArray(children)

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
                <ImageCarousel
                    src={src}
                    alt={alt}
                    caption={caption}
                />
            </div>
            { projects }
        </Card>
    )
}