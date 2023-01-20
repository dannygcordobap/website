import '../../resources/styles/Footer.css';

export default function FooterItem({ title, children }) {
    return (
        <div className='footer-item'>
            <div className='footer-title'>
                ~ <strong>{ title }</strong> ~
            </div>
            <div className='footer-content'>
                { children }
            </div>
        </div>
    )
}