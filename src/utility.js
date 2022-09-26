
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





// let newComponents = savedSongs.reduce( (components, song) => {
//   let newComponent = (<p>
//     {song.name}
//   </p>)
//   if (!components.includes(newComponent)) {
//     return components + newComponent
//   } else {
//     console.log({components})
//     return components
//   }
// }, [])
// return newComponents