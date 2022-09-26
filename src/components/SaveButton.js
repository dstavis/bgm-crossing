import { FaPlusSquare } from "react-icons/fa"

const SaveButton = (props) => {
  const { songName, songHour, url, saveSong} = props

  const saveSongCallback = () => {
    saveSong({name: songName, hour: songHour, url: url})
  }

  return (
    <button className="save-button" type="button" onClick={saveSongCallback}>
      <FaPlusSquare/>
    </button>
  )
}

export default SaveButton