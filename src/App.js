import React from 'react';
import './App.css';
import './styles/Home.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';


//Components
import Navigation from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Home from './components/Home';


// CSS Components
import './styles/Nav.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: {
                title: `"INTRO"`,
                nameText: 'Nikki Wu x Vancouver',
                jobText: 'Front End x React Native Developer',
                locationText: 'Based in Vancouver'
            },
            about: {
                aboutTitle: `"ABOUT ME"`,
                buttonText: `let's connect`,
            },
            project: {
                projectTitle: `"PROJECT"`
            }
        };
    }

    render() {
        return (

            <Router>
                <Container className='p-0' fluid={true}>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/portfolio'
                               render={() => <Home title={this.state.home.title} nameText={this.state.home.nameText}
                                                   jobText={this.state.home.jobText}
                                                   locationText={this.state.home.locationText}
                                                   aboutTitle={this.state.about.aboutTitle}
                                                   buttonText={this.state.about.buttonText}
                                                   projectTitle={this.state.project.projectTitle}/>}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' exact component={Contact}/>
                        <Route path='/project' exact component={Project}/>
                    </Switch>
                </Container>
            </Router>
        )
            ;
    };
}


export default App;
