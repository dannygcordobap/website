import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';
import hiking from '../../resources/images/hiking.jpg';

export default function Hobbies() {
    return (
        <Card title='Hobbies' stickyHeader={ true }>
            <Card
                title='Hiking and backpacking'
                isNested={ true }
            >
                <div className='container'>
                    <ImageCarousel
                        src={hiking}
                        alt='Cloud passing over mountainside'
                        caption='Hiking to Lake Serene in the Cascades'    
                    />
                    <div className='container-text'>
                        <p>
                            Ever since I got my dog Zeus, I have learned to 
                            really enjoy hiking and backpacking. 
                        </p>
                    </div>
                </div>
            </Card>
            <Card
                title='Playing the guitar'
                isNested={ true }
            >
                <div className='container'>
                    <ImageCarousel>
                        <div>
                            Image carousel
                        </div>
                    </ImageCarousel>
                    <div className='container-text'>
                        <p>
                            Hobby content here
                        </p>
                    </div>
                </div>
            </Card>
            <Card
                title='Trying new hobbies!'
                isNested={ true }
            >
                <div className='container'>
                    <ImageCarousel>
                        <div>
                            Image carousel
                        </div>
                    </ImageCarousel>
                    <div className='container-text'>
                        Hobby content here
                    </div>
                </div>
            </Card>
        </Card>
    )
}