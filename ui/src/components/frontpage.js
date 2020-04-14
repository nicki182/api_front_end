import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Frontpage extends Component {
    render() {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <div className="fw7 mr1">Proyect</div>
                    <Link to="/REGISTER" className="ml1 no-underline black">
                        REGISTER
                    </Link>
                    <div className="ml1"></div>
                    <Link to="/LOG_IN" className="ml1 no-underline black">
                        LOG IN
                    </Link>
                </div>
            </div>
        )
    }
}
export default withRouter(Frontpage)