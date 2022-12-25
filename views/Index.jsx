import React, { Component } from 'react'
    
export default class Index extends Component {
    render() {
      const {Logs} = this.props;
      console.log(Logs)
      return (
    <html>
        <body>
            <div>
                <h2 className="title"><a href="/">Homepage Logo</a></h2>
                <ul>
                    {Logs.map((Logs) => {
                        return (
                            <li>
                                <a href={`/logs/${Logs.id}`}> {Logs.title}</a>
                                <a href={`/logs/${Logs.id}/edit`} className="editor">Edit {Logs.title}</a>
                                <form action={`/logs/${Logs.id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Remove Log"/>
                                </form>
                            </li>
                          );
                      })}
                </ul>
            </div>
        </body>
        <nav>
            <a href="/new" className="newButton"> Create New Log</a>
        </nav>
    </html>
      )
    }
  }