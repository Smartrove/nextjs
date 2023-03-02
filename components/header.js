import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>Smartrove</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
