export default function Resume() {

    const resumePath = '../../resume/DanielCordobaPaez_Resume.pdf'

    return (
        <div className='resume-container'>
            <embed 
                src={resumePath} 
                title={'DanielCordobaPaez_Resume.pdf'} 
                type='application/pdf' 
                width='100%' 
                height='100%'
            />
        </div>
    )
}