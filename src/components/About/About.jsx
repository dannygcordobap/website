import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';
import me from '../../resources/images/about/me.jpg';
import meKarting from '../../resources/images/about/me-karting.jpg'
import karting from '../../resources/images/about/karting.jpg'

const images = [
    {
        src: me,
        alt: 'Photo of me mountain peak',
        caption: 'Me at Twin Mountain peak in the Catskills minutes after a snow squall'
    },
    {
        src: meKarting,
        alt: 'Me in a costume go-karting',
        caption: 'Me in a Toad costume go-karting through Shibuya in high school',
    },
    {
        src: karting,
        alt: 'View from a go-kart at an intersection',
        caption: 'First person view go karting through Shibuya in Tokyo, Japan'
    }
]

export default function About() {
    return (
        <Card title="About" stickyHeader={ true }>
            <div className='container'>
                <ImageCarousel images={ images } />
                <div className='container-text'>
                    <p>
                        Hi, I'm Danny, and this is my website!
                    </p>
                    <p>
                        While I was born in Miami, Florida, I lived there 
                        the least of all places. I grew up in Germany, where 
                        I lived for nine years, followed by two years in each 
                        of the following:
                    </p>
                        <ol>
                            <li>Okinawa, Japan</li>
                            <li>Tokyo, Japan</li>
                            <li>Prattville, Alabama</li>
                            <li>Tokyo, Japan</li>
                        </ol>
                    <p>
                        So it's a bit tough for me to say where I am from!
                    </p>
                </div>
            </div>
        </Card>
    )
}