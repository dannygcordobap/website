import HobbyItem from "./HobbyItem"
import snowmobiling from '../../resources/images/hobbies/new/snowmobiling.jpg';
import skinning from '../../resources/images/hobbies/new/skinning.jpg';
import motorcycle from '../../resources/images/hobbies/new/motorcycle.jpg';
import filmPicture from '../../resources/images/hobbies/new/film-picture.jpg';

const images = [
    {
        src: snowmobiling,
        alt: 'Me riding a snowmobile',
        caption: 'Me learning how to properly corner quickly on a snowmobile'
    },
    {
        src: skinning,
        alt: 'Me skinning up Mount Killington',
        caption: 'Skinning, essentially hiking in skis, up Mount Killington'
    },
    {
        src: filmPicture,
        alt: 'A curvy road surrounded by cherry blossom trees',
        caption: 'A 35mm photo of cherry blossoms on Yokota AFB I took and developed '
    },
    {
        src: motorcycle,
        alt: 'Me on a motorcycle',
        caption: 'Starting a motorcycle I repaired to somewhat working condition'
    }
]


export default function NewHobbies() {
    return (
        <HobbyItem title='Trying new hobbies' images={images}>
            <p>
                Growing up in foreign countries and moving around frequently 
                forced me to keep an open mind. Trying new things allowed me 
                to make new friends, appreciate new foods and activities, and 
                enabled me to connect with a larger protion of the population.
            </p>
            <p>
                I love trying new hobbies! It seems like cheating to consider 
                "hobby-collecting" a hobby, but it really is. I especially love 
                the learning phase of new hobbies as I get to learn more 
                about a topic I may not have been familiar with before. 
            </p>
        </HobbyItem>
    )
}