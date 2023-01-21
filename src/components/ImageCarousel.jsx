import '../resources/styles/ImageCarousel.css';

export default function ImageCarousel({ children }) {

    return (
        <div className='image-container'>
            <div style={{
                'margin': 'auto',
                'align': 'center'
            }}>
                { children }
            </div>
        </div>
    )
}