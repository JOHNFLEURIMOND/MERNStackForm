import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="mn">
        <div className="b b--b b--fw">
          <div className="b-c">
            <div className="sh sh--w">
              <h2 className="sh-title">{moment().format('llll')}</h2>
            </div>
          </div>
        </div>
      </div>
      <footer className="ft">
        <div className="ft-c">
          <ul className="ft-ll ft-ll--r">
            <li className="ft-ll-i">
              <a href="http://www.cityofboston.gov/311/" className="ft-ll-a lnk--yellow">
                <span className="ft-ll">Made With Love From </span>
                <span className="tablet--hidden"> - </span>Boston,Ma{' '}
              </a>
            </li>
          </ul>
          <ul className="ft-ll">
            <li className="ft-ll-i">
              <a href="https://johnfleurimond.com" className="ft-ll-a">
                John Fleurimond
              </a>
            </li>
            <li className="ft-ll-i">
              <a href="https://twitter.com/tcodemonger" className="ft-ll-a">
                Twitter
              </a>
            </li>
            <li className="ft-ll-i">
              <a href="https://www.linkedin.com/in/john-fleurimond" className="ft-ll-a">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
