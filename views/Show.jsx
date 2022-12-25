import React from "react";
import Logs from "../models/logs";

class Show extends React.Component {
    render () {
        const Logs = this.props.Logs
        console.log(this.props.Logs);
        return (
        <html>
            <body>
                <div>
                    <a href="/" className="homeLink">Homepage Logo</a>
                    <h2 className="pokeName">{Logs.title}</h2>
                    <p>{Logs.entry}</p>
                    <p>{Logs.shipIsBroken}</p>
                    <br />
                    <br />
                    <br />
                </div>
            </body>
            <nav>
                <a href="/" className="newButton"> Go Back</a>
            </nav>
        </html>
        )
    }
}

export default Show;