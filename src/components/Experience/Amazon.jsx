import ExperienceItem from './ExperienceItem';
import spheres from '../../resources/images/experience/amazon/spheres.jpg';
import spheresLogo from '../../resources/images/experience/amazon/spheres-logo.jpg';
import bananas from '../../resources/images/experience/amazon/bananas.jpg';
import nessie from '../../resources/images/experience/amazon/nessie.jpg';

const images = [
    {
        src: spheres,
        alt: 'Inside the Amazon Spheres',
        caption: 'The incredible view in the Amazon Spheres'
    },
    {
        src: spheresLogo,
        alt: 'The Amazon Spheres logo',
        caption: 'The Amazon Spheres logo'
    },
    {
        src: bananas,
        alt: 'Amazon community banana stand',
        caption: '"There\'s always money in the banana stand"'
    },
    {
        src: nessie,
        alt: 'Glass building door',
        caption: 'Amazon Nessie, my team\'s Seattle location'
    }
]

export default function Amazon() {

    return (
        <ExperienceItem 
            title='Amazon.com, SDE Intern'
            subtitle = 'June 2022 - December 2022'
            images={ images }
        >
            <div>
                <p>
                    At Amazon, I worked in Personalization, or P13N, on the 
                    Customer Intent team. Owning features such as 'Keep 
                    shopping for' and 'Pick up where you left off', we 
                    strived to be the best shopping assistant around.
                </p>
                <p>
                    Following a positive feedback from my summer term, 
                    I managed to extend my internship through the fall. 
                    During my extension, I worked independently 
                    on the team and conducted code reviews.
                </p>
            </div>
        </ExperienceItem>
    )
}