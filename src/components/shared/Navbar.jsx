import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">
        <img src="/assets/proin.png" alt="proin logo" />
      </Link>
    </div>
  );
}
