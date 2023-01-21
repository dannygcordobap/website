import '../resources/styles/Icon.css';

export default function Icon({ src, alt, handler }) {
    return (
        <div className='icon-container'>
            <img src={src} alt={alt} onClick={handler} onTouchStart={handler}/>
        </div>
    )
}