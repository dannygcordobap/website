import { useEffect, useRef } from 'react';

export default function Resume() {

    const resumePath = '../../resume/DanielCordobaPaez_Resume.pdf';
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.click();
        }
    }, [ref]);

    return (
        <a hidden={true} href={resumePath} ref={ref}>Redirect</a>
    );
}