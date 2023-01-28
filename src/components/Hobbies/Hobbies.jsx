import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';
import hiking1 from '../../resources/images/hiking1.jpg';
import hiking2 from '../../resources/images/hiking2.jpg';

export default function Hobbies() {

    const images = [hiking1, hiking2];
    const captions = [
        'Hiking to Lake Serene in the Cascade Mountains',
        'Zeus with his saddlebags after a 14-mile overnight'
    ]
    const alts = [
        'Cloud passing over mountainside',
        'Dog with backpack on bridge in woods'
    ]

    return (
        <Card title='Hobbies' stickyHeader={ true }>
            <Card
                title='Hiking and backpacking'
                isNested={ true }
            >
                <div className='container'>
                    <ImageCarousel
                        src={images}
                        alt={alts}
                        caption={captions}
                        count={2}
                    />
                    <p className='container-text'>
                        Hobby text
                    </p>
                </div>
            </Card>
        </Card>
    )
}