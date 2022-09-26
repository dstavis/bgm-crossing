import PropTypes from "prop-types"
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

SaveButton.propTypes = {
  songName: PropTypes.string,
  songHour: PropTypes.number,
  url: PropTypes.string,
  saveSong: PropTypes.func
} 