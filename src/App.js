
import './App.css';
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"

function App() {
    return (
        <div className="App">
            <Router>
                <div className="Navbar">
                    <Layout fixedHeader>
                        <Header className="navHeader" title={<span><span >Beni Mahat </span><strong></strong></span>}>
                            <Navigation>
                                <Link to="/">Homepage</Link>
                                <Link to="/projects">Projects</Link>
                            </Navigation>
                        </Header>
                        <Drawer className="nav_drawer" title="Projects">
                            <Navigation>
                                <Link to="/">About Me</Link>
                                <Link to="/">Skills</Link>
                                <Link to="/projects">Projects</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <Switch>
                                <Route path="/projects">
                                    <Projects />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>

                </div>
            </Router>
        </div>

    );
}

export default App;
