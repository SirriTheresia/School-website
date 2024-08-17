import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Welcome from "./pages/Welcome";
import Faculty from "./components/faculties";
import Administration from "./components/admission";
import StudentGuide from "./components/StudentGuide";
import AboutUs from "./components/about";
import Managedepartment from "./pages/managedepartment";
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/Welcome" exact={true}>
              <Welcome />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
            <Route path={"/faculties"}>
              <Faculty />
            </Route>
            <Route path={"/admission"}>
              <Administration />
            </Route>
            <Route path={"/studentguide" }>
            <StudentGuide/></Route>
            <Route path={"/about"}>
              <AboutUs />
            </Route>
            <Route path={"/manage-departments"}>
            <Managedepartment/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
