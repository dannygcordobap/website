import '../resources/styles/Icon.css';

export default function Icon({ src, alt, handler }) {
    return (
        <div className='icon' onClick={handler} onTouchStart={handler}>
            <img src={src} alt={alt} />
        </div>
    )
}