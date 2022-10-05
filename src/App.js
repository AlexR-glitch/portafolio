import{
BrowserRouter as Router,
Switch,
Route,
Link,
} from "react-router-dom";
import Home from "./pages/landing/Home.js";
import Menu from "./components/navbar/Menu.js";
import About from "./pages/about/AboutMe.js";
import Fotografia from "./pages/fotografia/Fotografia.js";
import Web from "./pages/portaweb/Web.js";
import Diseño from "./pages/diseño/Diseño.js";
import Portafolio from "./pages/portafolio/Portafolio.js";
import Contact from "./pages/contacts/Contact.js";
import Footer from "./components/footer/Footer.js";

export default function App() {
  return(
    <>
    <Router>
        <Menu></Menu> 
        <Switch>
            <Route path="/" exact> <Home /> </Route>
            <Route path="/about" exact> <About /> </Route>
            <Route path="/fotografia" exact> <Fotografia /> </Route>
            <Route path="/portafolio" exact> <Portafolio /> </Route>
            <Route path="/web" exact> <Web /> </Route>
            <Route path="/diseno" exact> <Diseño /> </Route>
            <Route path="/contact" exact> <Contact /> </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </>
  )
}