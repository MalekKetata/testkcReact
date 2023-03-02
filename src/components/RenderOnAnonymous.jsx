import { useKeycloak } from '@react-keycloak/web';
import React from 'react';


const RenderOnAnonymous = ({children}) => {
    const { keycloak, initialized } = useKeycloak();
    return (
        (!keycloak.token)? children : null
    );
}

export default RenderOnAnonymous;
