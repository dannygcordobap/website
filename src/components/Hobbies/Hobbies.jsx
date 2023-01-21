import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';

export default function Hobbies() {
    return (
        <Card title='Hobbies' stickyHeader={ true }>
            <Card
                title='Hiking and backpacking'
                isNested={ true }
            >
                <div className='container'>
                    <div className='container-text'>
                        Hobby content here
                    </div>
                    <ImageCarousel>
                        <div>
                            Image carousel
                        </div>
                    </ImageCarousel>
                </div>
            </Card>
            <Card
                title='Playing the guitar'
                isNested={ true }
            >
                <div className='container reversed'>
                    <div className='container-text'>
                        Hobby content here
                    </div>
                    <ImageCarousel>
                        <div>
                            Image carousel
                        </div>
                    </ImageCarousel>
                </div>
            </Card>
            <Card
                title='Trying new hobbies!'
                isNested={ true }
            >
                <div className='container'>
                    <div className='container-text'>
                        Hobby content here
                    </div>
                    <ImageCarousel>
                        <div>
                            Image carousel
                        </div>
                    </ImageCarousel>
                </div>
            </Card>
        </Card>
    )
}