import { useKeycloak } from '@react-keycloak/web';
import React from 'react';


const RenderOnAuthenticated = ({children}) => {
    const { keycloak, initialized } = useKeycloak();
    return (
        ((!!keycloak.token))? children : null
    );
}

export default RenderOnAuthenticated;
