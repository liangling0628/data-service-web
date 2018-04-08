import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './router'
import AuthRoute from './container/AuthRoute/AuthRoute'
import LayoutHeader from './components/LayoutHeader'
import LayoutMenu from './components/LayoutMenu'
import 'bootstrap/dist/css/bootstrap-grid.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <LayoutHeader/>
                <div className='container-fixed'>
                    <BrowserRouter>
                        <div className='manage-container'>
                            <LayoutMenu/>
                            <div className='manage-content'>
                                <AuthRoute/>
                                <Routes/>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
