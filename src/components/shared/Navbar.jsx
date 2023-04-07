import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">
        <img src="/assets/proin2.png" alt="proin logo" />
      </Link>
    </div>
  );
}
