import React from 'react'
import { About, Footer, Header, Projects, Skills, WorkExperience } from './containers';
import { Navbar } from './components';
import './App.scss'
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <WorkExperience />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;