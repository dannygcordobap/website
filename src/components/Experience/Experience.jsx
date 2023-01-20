import React from'react';
import Card from '../Card';

const Experience = () => {
    return (
        <Card title='Experience' stickyHeader={true}>
            Include resume preview and download!
            <Card 
                title='Amazon.com, SDE Intern'
                subtitle={'June 2022 - December 2022'}
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
                    Amazon experience here
                </div>
                <h4 style={{'margin-bottom': '5px'}}>Project 1</h4>
                <div>Project 1 here</div>
                <h4 style={{'margin-bottom': '5px'}}>Project 2</h4>
                <div>Project 2 here</div>
            </Card>
            <Card 
                title='Factory Wheel Warehouse, Junior SWE'
                subtitle={'January 2022 - May 2022'}
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
                    FWW experience here
                </div>
                <h4 style={{'margin-bottom': '5px'}}>Project 1</h4>
                <div>Project 1 here</div>
                <h4 style={{'margin-bottom': '5px'}}>Project 2</h4>
                <div>Project 2 here</div>
            </Card>
        </Card>
    )
}

export default Experience