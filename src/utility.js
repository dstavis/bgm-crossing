
const translateHourNumberToString = (hourNumber) => {
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
  return hourString
}

export {translateHourNumberToString}