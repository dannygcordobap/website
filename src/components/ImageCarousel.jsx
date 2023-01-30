import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../resources/styles/ImageCarousel.css';

export default function ImageCarousel({ images = [] }) {
    const [current, setCurrent] = useState(0);
    const [transform, setTransform] = useState({transform: 'translateX(0%)'})
    const [prevClass, setPrevClass] = useState('disabled');
    const [nextClass, setNextClass] = useState('');

    const numberClickHandler = (e) => {
        setCurrent(parseInt(e.target.id));
        console.log(e.target.id);
        console.log(e.target.className);
    }

    const nextHandler = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1);
        }
    }

    const prevHandler = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextHandler,
        onSwipedRight: prevHandler
    })

    const imageCount = [...Array(images.length).keys()]
        .map(element => {
            return (
                <div 
                    className={'page-number' + (current === element ? ' active' : '')}
                    id={ element }
                    onClick={ numberClickHandler }
                >
                    { element + 1 }
                </div>

            )
        });

    useEffect(() => {
        if (current === 0) {
            setPrevClass('disabled');
            setNextClass('');
        } else if (current + 1 === images.length) {
            setNextClass('disabled');
            setPrevClass('');
        } else {
            setPrevClass('');
            setNextClass('');
        }
        setTransform({
            transform: `translateX(-${current * 100}%)`
        })
    }, [current, images.length])

    return images.length > 0 ? (
        <div className='carousel' {...swipeHandlers}>
            <div className='inner' style={transform}>
                {images.map(image => {
                    return (
                        <div className="carousel-item">
                            <figure>
                                <img src={image.src} alt={image.alt} />
                                <figcaption>{image.caption}</figcaption>
                            </figure>
                        </div>
                    )
                })}
            </div>
            {images.length > 1 ? (
                    <div className='image-count'>
                        <div className={prevClass} onClick={prevHandler}>
                            {'<<< Previous'}
                        </div>
                            {imageCount}
                        <div className={nextClass} onClick={nextHandler}>
                            {'Next >>>'}
                        </div>
                    </div>
                ) : null
            }
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