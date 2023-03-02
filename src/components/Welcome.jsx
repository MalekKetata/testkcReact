import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
const Welcome = () => {
    const { keycloak, initialized } = useKeycloak();
    return (
        <div className="jumbotron">
    <h1>Hello Anonymous!</h1>
    <p className="lead">Please authenticate yourself!</p>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => keycloak.login()}>Sign In</button>
    </p>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => keycloak.register()}>Sign Up</button>
    </p>
  </div>
    );
}

export default Welcome;
