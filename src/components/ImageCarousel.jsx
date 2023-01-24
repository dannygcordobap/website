import '../resources/styles/ImageCarousel.css';

export default function ImageCarousel({ 
    children,
    src = undefined,
    alt = undefined,
    caption = undefined
}) {

    return src ? (
        <div className='image-container'>
            <figure>
                <img src={src} alt={alt} />
                <figcaption>{caption}</figcaption>
            </figure>
        </div>
    ) : (
        <div className='image-container'>
            <div style={{
                'margin': 'auto',
                'align': 'center'
            }}>
                Image Carousel
            </div>
        </div>
    )
}