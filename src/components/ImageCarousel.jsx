import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../resources/styles/ImageCarousel.css';

export default function ImageCarousel({ 
    src = undefined,
    alt = undefined,
    caption = undefined,
    count = undefined
}) {
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
        if (current < count - 1) {
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

    const imageCount = [...Array(count).keys()]
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
        } else if (current + 1 === src.length) {
            setNextClass('disabled');
            setPrevClass('');
        } else {
            setPrevClass('');
            setNextClass('');
        }
        setTransform({
            transform: `translateX(-${current * 100}%)`
        })
    }, [current])

    return src ? ( 
        Array.isArray(src) ? (
            <div className='carousel' {...swipeHandlers}>
                <div className='inner' style={transform}>
                    {[...Array(count).keys()].map(index => {
                        return (
                            <div className="carousel-item">
                                <figure>
                                    <img src={src[index]} alt={alt[index]} />
                                    <figcaption>{caption[index]}</figcaption>
                                </figure>
                            </div>
                        )
                    })}
                </div>
                <div className='image-count'>
                    <div className={prevClass} onClick={prevHandler}>
                        {'<<< Previous'}
                    </div>
                        {imageCount}
                    <div className={nextClass} onClick={nextHandler}>
                        {'Next >>>'}
                    </div>
                </div>
            </div>
        ) : (
            <div className='image-container'>
                <figure>
                    <img src={src} alt={alt} />
                    <figcaption>{caption}</figcaption>
                </figure>
            </div>
        )
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