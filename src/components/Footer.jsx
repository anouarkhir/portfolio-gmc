function Footer(props) {
  return (
    <footer>
      <div className="info">
        <i class="fas fa-phone-alt icon"></i>
        <div>
          <h4>Call</h4>
          <p>{props.phone}</p>
        </div>
      </div>

      <div className="info">
        <i class="fas fa-envelope icon"></i>
        <div>
          <h4>Email</h4>
          <p>{props.email}</p>
        </div>
      </div>

      <div className="info">
        <i class="fas fa-plus icon"></i>
        <div>
          <h4>Follow me on</h4>
          <ul className="social-links">
            <li>
              <a href={props.linkedin}>
                <i class="fab fa-linkedin social-icon"></i>
              </a>
            </li>
            <li>
              <a href={props.skype}>
                <i class="fab fa-skype social-icon"></i>
              </a>
            </li>
            <li>
              <a href={props.codepen}>
                <i class="fab fa-codepen social-icon"></i>
              </a>
            </li>
            <li>
              <a href={props.github}>
                <i class="fab fa-github social-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="info">
        <i class="fas fa-copyright icon"></i>
        <div>
          <h4>Go My Code feb-21</h4>
          <p>Created by Me</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
