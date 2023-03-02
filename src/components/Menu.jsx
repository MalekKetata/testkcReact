import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { keycloak, initialized } = useKeycloak();
  let role;
  if (JSON.stringify(keycloak.realmAccess?.roles).includes("user")){
    role = "collaborator"
  }
  if (JSON.stringify(keycloak.realmAccess?.roles).includes("admin")){
    role = "administrator"
  }
  return (
    <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
              </ul>
              <button className="btn btn-success navbar-btn navbar-right" onClick={() => keycloak.logout()}>
                Logout
              </button>
              <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
                <h1>Welcome {keycloak.tokenParsed?.preferred_username}</h1>
                 <h2>Signed in as {role}
                 </h2>
              </p>
              <p>{keycloak.token}</p>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Menu;
