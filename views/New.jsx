import React, { Component } from 'react'

export class New extends Component {
  render() {
    return (
      <div>
        <html>
            <body>
            <nav>
                <a href="/" className="newButton"> Back To Homepage</a>
            </nav>
                <div className="main-container">
                    <h1 className="title">New Log</h1>
                    <form action="/logs" method="POST" autoComplete="off">
                        Log Title:<br />
                        <input id="title" type="text" name="title" placeholder="Enter your log title here" autoComplete="off"/> <br />
                        Log Entry: <br />
                        <textarea id="entry" name="entry" rows="4" cols="50" placeholder="Enter your log information here" autoComplete="off">
                        </textarea><br />
                        Broken Ship? <input type="checkbox" name="shipIsBroken"/><br />
                        <input type="submit" name="" value="Submit New Log" />
                    </form>
                </div>
            </body>
        </html>
      </div>
    )
  }
}

export default New;