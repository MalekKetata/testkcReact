import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8180/",
    realm: "quarkusfr",
    clientId: "frontend",
});

export default keycloak;