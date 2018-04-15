import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './pages/Index'
import Pameran from './pages/Pameran'
import Kompetisi from './pages/Kompetisi'
import Page404 from './pages/Page404'
import Nav from './component/Nav/Nav'
import { Container } from 'semantic-ui-react'

class Routers extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Nav/>
                    <Container style={styles.dash} >
                        <Switch>
                            <Route path='/' exact component={Index}/>
                            <Route path='/pameran' component={Pameran}/>
                            <Route path='/kompetisi' component={Kompetisi}/>
                            <Route component={Page404}/>
                        </Switch>
                    </Container>
                </div>
            </Router>
        )
    }
}

const styles = {
    dash:{
        marginTop: 67,
        marginBottom: 0
    }
}
export default Routers