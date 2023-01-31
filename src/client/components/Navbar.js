import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="nv-s nv-s--c">
        <input type="checkbox" id="nv-s-tr" className="nv-s-tr" aria-hidden="true" />

        <ul className="nv-s-l">
          <li className="nv-s-l-i">
            <label
              for="nv-s-tr"
              className="nv-s-l-b"
              type="button"
              style={{ color: 'red' }}
            >
              John Fleurimond
            </label>
          </li>

          <li className="nv-s-l-i">
            <a className="nv-s-l-a nv-s-l-a--active" href="https://johnfleurimond.com">
              John Fleurimond
            </a>
          </li>
          <li className="nv-s-l-i">
            <a className="nv-s-l-a" href="https://twitter.com/tcodemonger">
              Twitter
            </a>
          </li>
          <li className="nv-s-l-i">
            <a className="nv-s-l-a" href="https://github.com/JOHNFLEURIMOND">
              Github
            </a>
          </li>

          <li className="nv-s-l-i">
            <a href="https://www.linkedin.com/in/john-fleurimond" className="nv-s-l-a">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
