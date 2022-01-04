const Header = props => (
  <header className="header">
    <div>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>

    <div className="header-links">
      <ul className="links-list">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">resume</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
