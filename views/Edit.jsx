import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const { Logs } = this.props;
    console.log(this.props.Logs);
    return (
      <div>
        <html>
          <body>
            <div className="main-container">
              <h1 className="title">Edit Logs</h1>
                <form action={`/logs/${Logs._id}?_method=PUT`} method="POST">
                  Log Title:<br />
                <input type="text" name="title" placeholder="Enter your log title here" autoComplete="off" defaultValue={Logs.title}/> <br />
                  Log Entry: <br />
                <textarea id="entry" name="entry" rows="4" cols="50" placeholder="Enter your log information here" autoComplete="off" defaultValue={Logs.entry}>
                </textarea><br />
                  Broken Ship? <input type="checkbox" name="shipIsBroken" defaultValue={Logs.shipIsBroken}/><br />
                <input type="submit" name="" value="Submit New Log" />
                </form>
            </div>
          </body>
          <nav>
            <a href="/" className="newButton"> Go Back</a>
          </nav>
        </html>
      </div>
    )
  }
}