import React from 'react'
import Navbar from './components/navbar.jsx'
import IssueCard from './components/issueCard.jsx'
import IssueCardGenerator from './components/issueCardGenerator.jsx'
import './App.css'
import { render } from '@testing-library/react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      issues: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/angular/angular/issues')
    .then(res => res.json())
    .then(res => {
      this.setState({
        issues: res,
        isLoaded: true
      })
    })
    // this.logit()
  }

  logit() {
    console.log(this.state)
  }

  render() {
    return(
      <div className="App primary">
        <Navbar />
        <IssueCardGenerator {...this.state} />
        {this.logit()}
      </div>
    )
  }
}

export default App;
