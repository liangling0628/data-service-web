import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends Component {

    componentDidMount() {
        console.info(this.props)
    }

    render() {
        return null
    }
}

export default AuthRoute