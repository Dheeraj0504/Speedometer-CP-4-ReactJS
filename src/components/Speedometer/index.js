// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAccelerateButton = () => {
    // console.log("Accelerate Speed")
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        // console.log(`previous speed value ${prevState.speed}`)
        return {
          speed: prevState.speed + 10,
        }
      })
    }
  }

  onClickApplyBrakeButton = () => {
    // console.log("Apply Brake")
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    // return <h1>Hellow World!</h1>

    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="speedometer-image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="accelerate-button button"
              type="button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              className="apply-brake-button button"
              type="button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
