import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Footer from "./assets/components/Footer";
import PrivacyPolicy from "./assets/components/PrivacyPolicy";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 160,
            duration: 2000,
          });
      }, []);
    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
}

export default App;