import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Resume() {

    const resumePath = '../resume/DanielCordobaPaez_Resume.pdf'
    const navigate = useNavigate();

    useEffect(() => {
        navigate(resumePath);
        navigate(0);
    });

    return;
}