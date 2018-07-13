import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

class App extends Component {

    constructor(props){
    super(props)
    this.state = {
        cats: [
            {
              id: 1,
              name: 'Morris',
              age: 2,
              enjoys: "Long walks on the beach."
            },
            {
              id: 2,
              name: 'Paws',
              age: 4,
              enjoys: "Snuggling by the fire."
            },
            {
              id: 3,
              name: 'Mr. Meowsalot',
              age: 12,
              enjoys: "Being in charge."
            }
        ]
    }
    }

    handleSubmit(newCat){
        console.log(newCat);
        let { cats } = this.state
        cats.push(newCat)
        console.log("This is the updated cats array: ", cats);
        this.setState({cats: cats})
    }

    render() {
        console.log("The Current State Is:",this.state.cats);
        return (
            <div>
            <Header />
                <Router>
                    <Switch>

                    <Route exact path="/" render={(props) => <NewCat handleSubmit={this.handleSubmit.bind(this)}/>} />

                    <Route path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />

                    <Route path="/new" component={NewCat} />

                    </Switch>
                </Router>
            </div>
        );
      }
    }

export default App;
