const links = [
  {
    id: 1,
    text: "CHARACTERS",
    url: "#",
  },
  {
    id: 2,
    text: "COMICS",
    url: "#",
    current: true,
  },
  {
    id: 3,
    text: "MOVIES",
    url: "#",
  },
  {
    id: 4,
    text: "TV",
    url: "#",
  },
  {
    id: 5,
    text: "GAMES",
    url: "#",
  },
  {
    id: 6,
    text: "COLLECTIBLES",
    url: "#",
  },
  {
    id: 7,
    text: "VIDEOS",
    url: "#",
  },
  {
    id: 8,
    text: "FANS",
    url: "#",
  },
  {
    id: 9,
    text: "NEWS",
    url: "#",
  },
  {
    id: 10,
    text: "SHOP",
    url: "#",
  },
];

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/img/dc-logo.png" alt="" />
        </div>
        <div className="header-right">
          <nav className="main-nav">
            <ul id="nav-list">
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a className="animated-underline" href={link.url}>
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
