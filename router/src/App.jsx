import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul className="nav-links">
                        <li><NavLink exact to="/" activeClassName="active">All</NavLink></li>
                        <li><NavLink to="/fullstack" activeClassName="active">Full Stack Development</NavLink></li>
                        <li><NavLink to="/datascience" activeClassName="active">Data Science</NavLink></li>
                        <li><NavLink to="/cybersecurity" activeClassName="active">Cyber Security</NavLink></li>
                        <li><NavLink to="/career" activeClassName="active">Career</NavLink></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<All />} />
                    <Route path="/fullstack" element={<FullStack />} />
                    <Route path="/datascience" element={<DataScience />} />
                    <Route path="/cybersecurity" element={<CyberSecurity />} />
                    <Route path="/career" element={<Career />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
