import React, { Component } from 'react';

import NavBar from './Header'
import Footer from './Footer'
import Home from './Home';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default App
