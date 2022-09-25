function Clock(props) {
  const {hour, selectedHour, changeSelectedHour} = props

  let hourNumbers = Array.from(Array(24).keys())
  
  const hourOptions = hourNumbers.map((hourNumber, index, array) => {
    let hourNumberCopy = hourNumber
    let hourString = "";
    if( hourNumberCopy === 12){
      hourString = hourNumberCopy.toString() + " PM"
    } else if(hourNumberCopy === 0){
      hourNumberCopy = 12
      hourString = hourNumberCopy.toString() + " AM"
    } else if(hourNumberCopy > 12){
      hourNumberCopy = hourNumberCopy - 12
      hourString = hourNumberCopy.toString() + " PM"
    } else {
      hourString = hourNumberCopy.toString() + " AM"
    }
    return (<option value={hourNumber}>{hourString}</option>)
  })
  
  return (
    <>
      <h3>Current Time</h3>
      <p>
        {/* {time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})} */}
        {hour + " AM"}
      </p>
      <select name="hours" id="hour-select" value={selectedHour} onChange={changeSelectedHour}>
        <option value="realTime">Real Time</option>
        {hourOptions}
      </select>
    </>
  )
}

export default Clock