var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () =>{
  return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">CommunityFridge</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">MyFridge</IndexLink>
            </li>
            <li>
              <Link to="/community" activeClassName="active-link">CommunityFridge</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <button className="button login_button"><Link to="/login" style={{color:'white'}}>LogIn/LogOut</Link></button>
            </li>
          </ul>
        </div>
      </div>
  );
};


module.exports = Nav;
