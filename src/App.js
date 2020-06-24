import React from 'react'
import Navbar from './components/navbar.jsx'
import IssueCardGenerator from './components/issueCardGenerator.jsx'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      issues: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/angular/angular/issues')
    .then(res => res.json())
    .then(res => {
      this.setState({
        issues: res
      })
    })
  }

  render() {
    return(
      <div className="App primary">
        <Navbar />
        <IssueCardGenerator {...this.state} />
      </div>
    )
  }
}

export default App;
