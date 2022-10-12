import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  renderNumber = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return <p className="details">Count is Even</p>
    }
    return <p className="details">Count is Odd</p>
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="number">Count {count}</h1>
          {this.renderNumber()}
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>

          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
