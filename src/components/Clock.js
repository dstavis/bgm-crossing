import {translateHourNumberToString} from "../utility"
import PropTypes from "prop-types"

function Clock(props) {
  const {hour, selectedHour, changeSelectedHour} = props

  let hourNumbers = Array.from(Array(24).keys())
  
  const hourOptions = hourNumbers.map((hourNumber) => {
    const hourString = translateHourNumberToString(hourNumber)
    return (<option key={hourNumber} value={hourNumber}>{hourString}</option>)
  })
  
  return (
    <section className="clock">
      <h3 className="current-time-heading">Current Time</h3>
      <p className="current-time">
        {translateHourNumberToString(hour)}
      </p>
      <h3 className="time-travel-heading"><small>(time travel...?)</small></h3>
      <select className="hour-select" name="hours" id="hour-select" value={selectedHour} onChange={(event) => changeSelectedHour(event.target.value)}>
        <option value="realTime">Real Time</option>
        {hourOptions}
      </select>
    </section>
  )
}

export default Clock

Clock.propTypes = {
  hour: PropTypes.number,
  selectedHour: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  changeSelectedHour: PropTypes.func
} 