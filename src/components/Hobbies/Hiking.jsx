import React from'react';
import HobbyItem from './HobbyItem';
import lakeSerene from '../../resources/images/hobbies/hiking/lake-serene.jpg';
import zeusOvernight from '../../resources/images/hobbies/hiking/zeus-overnight.jpg';

const images = [
    {
        src: lakeSerene,
        alt: 'Cloud passing over mountainside',
        caption: 'The view of Mt. Index hiking to Lake Serene in the Cascades'
    },
    {
        src: zeusOvernight,
        alt: 'Cloud passing over mountainside',
        caption: 'Zeus with his saddlebags after a 14-mile overnight trip in the Catskills'
    }
]

export default function Hiking() {
    return (
        <HobbyItem
            title='Hiking and backpacking'
            images={images}
        >
            <p>
                Ever since I was young, I have always loved the 
                outdoors. Having lived in Tokyo as long as I did, 
                I have hiked Mt. Fuji three times, including one
                overnight. As crazy as it may sound, I've also 
                camped in -10&#176;F weather and actually enjoyed 
                it.  
            </p>
            <p>
                After I got Zeus, my dog, in 2019 
                I have started hiking and backpacking significantly 
                more. He loves going on hikes, especially when he 
                can run freely, even if it means he has to carry 
                his own stuff.
            </p>
        </HobbyItem>
    )
}