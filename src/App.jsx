import React from "react";
//import Nav from "./components/Nav";
//import WelcomePage from "./pages/Homepage";
//import SecuredPage from "./pages/Securedpage";
//import PrivateRoute from "./helpers/PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RenderOnAnonymous from "./components/RenderOnAnonymous";
import Welcome from "./components/Welcome";
import RenderOnAuthenticated from "./components/RenderOnAuthenticated";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
     <React.StrictMode>
       
       <BrowserRouter>
       <div className="container">
        <RenderOnAnonymous>
            <Welcome/>
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            <Menu/>
          </RenderOnAuthenticated>
        </div>
         {/* <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
         </Routes> */}
       </BrowserRouter>
       </React.StrictMode>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;