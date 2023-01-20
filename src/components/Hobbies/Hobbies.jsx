import React from'react';
import Card from '../Card';

export default function Hobbies() {
    return (
        <Card title='Hobbies' stickyHeader={true}>
            <Card
                title='Hiking and backpacking'
                isNested={true}
            >
                <div style={{
                    'border': '1px solid #000', 
                    'height': '400px', 
                    'width': '400px',
                    'display': 'flex',
                    'align-items': 'center',
                    'margin': '15px auto 15px auto'
                }}>
                    <div style={{
                        'margin': 'auto',
                        'textAlign': 'center'
                }}>
                        Maybe an image here
                    </div>
                </div>
                <div>
                    Hobby content here
                </div>
            </Card>
            <Card
                title='Playing the guitar'
                isNested={true}
            >
                <div style={{
                    'border': '1px solid #000', 
                    'height': '400px', 
                    'width': '400px',
                    'display': 'flex',
                    'align-items': 'center',
                    'margin': '15px auto 15px auto'
                }}>
                    <div style={{
                        'margin': 'auto',
                        'textAlign': 'center'
                }}>
                        Maybe an image here
                    </div>
                </div>
                <div>
                    Hobby content here
                </div>
            </Card>
            <Card
                title='Trying new hobbies!'
                isNested={true}
            >
                <div style={{
                    'border': '1px solid #000', 
                    'height': '400px', 
                    'width': '400px',
                    'display': 'flex',
                    'align-items': 'center',
                    'margin': '15px auto 15px auto'
                }}>
                    <div style={{
                        'margin': 'auto',
                        'textAlign': 'center'
                }}>
                        Maybe an image here
                    </div>
                </div>
                <div>
                    Hobby content here
                </div>
            </Card>
        </Card>
    )
}