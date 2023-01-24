import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';
import me from '../../resources/images/me.jpg';

export default function About() {
    return (
        <Card title="About" stickyHeader={ true }>
            <div className='container'>
                <ImageCarousel
                    src={me}
                    alt='Photo of me mountain peak'
                    caption='Me at Twin Mountain peak minutes after a snow squall passed'
                />
                <div className='container-text'>
                    <p>
                        Hi, I'm Danny, and this is my website!
                    </p>
                    <p>
                        While I was born in Miami, Florida, I have lived there 
                        the least of all places, and the US least of all 
                        countries! I grew up in Germany, where I lived for nine 
                        years, followed by two years in each of the following, 
                        in order:
                        <ol>
                            <li>Okinawa, Japan</li>
                            <li>Tokyo, Japan</li>
                            <li>Prattville, Alabama</li>
                            <li>Tokyo, Japan</li>
                        </ol>
                        So it's a bit tough for me to say where I am from!
                    </p>
                </div>
            </div>
        </Card>
    )
}