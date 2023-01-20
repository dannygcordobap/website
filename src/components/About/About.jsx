import React from'react';
import Card from '../Card';

export default function About() {
    return (
        <Card title="About" stickyHeader={true}>
                <div style={{
                    'border': '1px solid #000',
                    'height': '400px',
                    'width': '400px',
                    'display': 'flex',
                    'align-items': 'center',
                    'margin': '15px auto'
                }}>
                    <div style={{
                        'margin': 'auto',
                        'textAlign': 'center'
                    }}>
                        Image Carousel
                    </div>
                </div>
                <div>
                    General 'bout me content here
                </div>
                <h4 style={{'margin-bottom': '5px'}}>My Timeline!</h4>
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