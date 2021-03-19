import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import FooterSection from './components/FooterSection'
import HeaderSection from './components/HeaderSection'
import Home from './components/Home'
import Restuarant from './components/Restuarant'
import SearchResult from './components/SearchResult'
import SubHeader from './components/SubHeader'


const Layout = ({ children}) => {
   // console.log("children:",children)
    return (
        <div className="mainContainer">
            {children[0]}
            <div className="mainContent mb-5">
            {children[1]}
            </div><br/>
            <div>
            <FooterSection/>
            </div>
        </div>
    )
}


const App = () => {
    
    return (

        <BrowserRouter>

            <Switch>
                <Route exact path="/">
                    <Layout>
                        <HeaderSection/>
                        <Home />
                    </Layout>
                </Route>
                <Route path="/restuarant/:id">
                    <Layout>
                        <SubHeader/>
                        <Restuarant />
                    </Layout>
                </Route>
                <Route path="/search/:address">
                    <Layout>
                        <SubHeader/>
                        <SearchResult/>
                    </Layout>
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default App
