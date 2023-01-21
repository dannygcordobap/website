import React from'react';
import Card from '../Card';
import ImageCarousel from '../ImageCarousel';
import me from '../../resources/images/me.jpg';

export default function About() {
    return (
        <Card title="About" stickyHeader={ true }>
            <div className='container'>
                <div className='container-text'>
                    General 'bout me content here
                </div>
                <ImageCarousel>
                    <img src={me} alt='photo of me' />
                </ImageCarousel>
            </div>
            <h3 style={{'margin-bottom': '5px'}}>My Timeline!</h3>
            <div style={{
                'border': '1px solid #000',
                'width': '100%',
                'height': '4em',
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