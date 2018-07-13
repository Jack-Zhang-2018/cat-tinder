import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import { getCats,createCat } from './api'


class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            cats: [],
            newCatSuccess: false
        }
    }

    handleSubmit(newCat){
        console.log("New Cat TRY", newCat)
        createCat(newCat)
        .then(successCat => {
        console.log("CREATE SUCCESS!", successCat);
        let newKitty = this.state.cats
        newKitty.push(successCat)
        this.setState({
            newCatSuccess: true,
            cats: newKitty
        })
    })
    }

    componentWillMount() {
        getCats()
        .then(APIcats => {
            this.setState({
                cats: APIcats
        })
    })
    }

    render() {

        return (
            <div>
            <Header />
                <Router>
                    <Switch>

                    <Route exact path="/" render={(props) => <NewCat handleSubmit={this.handleSubmit.bind(this)} success = {this.state.newCatSuccess}/>} />

                    <Route path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />

                    <Route path="/new" component={NewCat} />

                    </Switch>
                </Router>
            </div>
        );
      }
    }

export default App;
