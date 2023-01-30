import ExperienceItem from './ExperienceItem';
import fww from '../../resources/images/experience/fww/fww.jpg';

const images = [
    {
        src: fww,
        alt: 'A car rim',
        caption: 'A rim following the refinishing process, not yet wiped down'
    }
]

export default function FWW() {
    return (
        <ExperienceItem 
            title='Factory Wheel Warehouse, Junior SWE'
            subtitle = 'January 2022 - May 2022'
            images={ images }
        >
            <div>
                <p>
                    Factory Wheel Warehouse is a small online retail 
                    company that focuses on selling remanufactured rims. 
                    Having only 5 employees, many processes were still 
                    manual. I started as a full time Sales Representative 
                    to support myself while in school.
                </p>
                <p>
                    As a Sales Representative I automated our internal 
                    processes to free myself more time to focus on 
                    development tasks and earned myself the title of Junior 
                    SWE.
                </p>
            </div>
        </ExperienceItem>
    )
}