export default function Header() {
  return (
    <header>
      <div>
        <img src="/img/dc-logo.png" alt="" />
      </div>
      <div className="header-right">
        <nav className="main-nav">
          <ul id="nav-list">
            <li>
              <a className="animated-underline" href="#">
                <strong>CHARACTERS</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>COMICS</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>MOVIES</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>TV</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>GAMES</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>COLLECTIBLES</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>VIDEOS</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>FANS</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>NEWS</strong>
              </a>
            </li>
            <li>
              <a className="animated-underline" href="#">
                <strong>SHOP</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
