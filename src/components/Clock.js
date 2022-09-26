import {translateHourNumberToString} from "../utility"

function Clock(props) {
  const {hour, selectedHour, changeSelectedHour} = props

  let hourNumbers = Array.from(Array(24).keys())
  
  const hourOptions = hourNumbers.map((hourNumber) => {
    const hourString = translateHourNumberToString(hourNumber)
    return (<option value={hourNumber}>{hourString}</option>)
  })
  
  return (
    <>
      <h3>Current Time</h3>
      <p>
        {translateHourNumberToString(hour)}
      </p>
      <select name="hours" id="hour-select" value={selectedHour} onChange={(event) => changeSelectedHour(event.target.value)}>
        <option value="realTime">Real Time</option>
        {hourOptions}
      </select>
    </>
  )
}

export default Clock