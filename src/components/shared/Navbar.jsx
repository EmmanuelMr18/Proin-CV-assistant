import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="flex justify-center" id="navbar">
      <Link className="mr3" to="/">
        <img src="/assets/Proin.png" />
      </Link>
    </div>
  );
}
