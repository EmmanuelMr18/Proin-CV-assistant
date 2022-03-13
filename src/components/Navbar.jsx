import logo from '../assets/Proin.png';

export function Navbar() {
    return (
        <div className='flex justify-center' id='navbar'>
            <a className='mr3' href="/">
                <img src={logo} />
            </a>
        </div>
    );
}
