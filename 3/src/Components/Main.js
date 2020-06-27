        import React, { Component } from 'react'
        import {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import Users from './Users'
import UserDetail from './UserDetail'

        export default class Main extends Component {
            render() {
                return (
                    <div>
                        <Router>
                            <div>
                                    <Link to="/" ></Link>
                                    <Link to="/user"></Link>
                            </div>
                            <div>   
                                    <Route path="/" exact component={Users} />
                                    <Route path="/user/:id" exact component={UserDetail} />
                            </div>
                        </Router>
                    </div>
                )
            }
        }
        