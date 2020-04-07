import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from "react-router";
class Page extends Component {
    render() {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <Link to="/LOG_OUT" className="ml1 no-underline black">
                        LOG OUT
                    </Link>
                    <div className="ml1"></div>
                    <Link to="/DELETE" className="ml1 no-underline black">
                        DELETE
                    </Link>
                </div>
            </div>
        )
    }
}
export default withRouter(Page)