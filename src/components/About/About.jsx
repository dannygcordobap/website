import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';
import me from '../../resources/images/me.jpg';

export default function About() {
    return (
        <Card title="About" stickyHeader={ true }>
            <div className='container'>
                <div className='container-text'>
                    <p>
                        Hi, I'm Danny, and this is my website!
                    </p>
                    <p>
                        Growing up as the son of immigrants and in a military family provided an incredibly unique experience and allowed me to immerse myself in many cultures around the world.
                    </p>
                    <p>
                        From growing up in Germany and exploring Europe, to highschool in Tokyo, Japan you can explore my story below.
                    </p>
                </div>
                <ImageCarousel
                    src={me}
                    alt='Photo of me mountain peak'
                    caption='Me at Twin Mountain peak minutes after a snow squall passed'
                />
            </div>
            <h3 style={{'margin-bottom': '5px'}}>My Timeline!</h3>
            <div style={{
                'border': '1px solid #000',
                'width': '100%',
                'height': '10vw',
                'display': 'flex',
                'alignItems': 'center',
                'margin': '15px auto'
            }}>
                <div style={{
                    'margin': 'auto',
                    'textAlign': 'center'
                }}>
                    Timeline slider
                </div>
            </div>
            <div>
                Current timeline content
            </div>
        </Card>
    )
}