import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' //can use HashRouter or BrowserRouter if running into trouble on builds
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import { withAuth } from '@okta/okta-react'
import Protected from '../components/Protected'
import LoginPage from '../components/LoginPage'
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import DetailPageFilter from '../containers/DetailPageFilter'
import Search from '../components/Search'
import BrowsePageFilter from '../containers/BrowsePageFilter'

function onAuthRequired({history}) {
  history.push('/login')
}

export default withAuth(class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "japanese",
      authenticated: null
    }
    this.checkAuthentication = this.checkAuthentication.bind(this)
    //this.checkAuthentication()
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated()
    if(authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  changeLanguage(newLanguage) {
    this.setState({
      language: newLanguage
    })
  }

  componentDidUpdate() {
    this.checkAuthentication()
  }

  render() {
    return (
      <Router>
        <Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
                              client_id="0oacxjbp9y3dH50cI0h7"
                              redirect_uri={window.location.origin + '/implicit/callback'}
                              onAuthRequired={onAuthRequired} >
            <Navbar lang={this.state.language} changeLanguage={this.changeLanguage} />
            <Search />
            <Route exact path="/" render={() => <FeaturedPage lang={this.state.language} />} />
            <Route path="/browse/:filter" render={({match}) => <BrowsePageFilter match={match} lang={this.state.language} />} />
            <Route path="/details/:section/:page/:id" render={({match}) => <DetailPageFilter match={match} lang={this.state.language} />} />
            <SecureRoute path="/protected" component={Protected} />
            <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" />} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>
    )
  }
})

/* Keeping Okta things commented out until PR#51 goes npm.


export default (

constructor(props) {
    super(props)
    
  }

  

  
          
            
            
          </Security>
)
*/