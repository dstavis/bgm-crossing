import PropTypes from "prop-types"
import { FaMinusSquare } from "react-icons/fa";

const RemoveButton = (props) => {
  const { removeSong, songName } = props;

  const removeSongCallback = () => {
    removeSong({ name: songName });
  };

  return (
    <button className="remove-button" type="button" onClick={removeSongCallback} >
      <FaMinusSquare />
    </button>
  );
};

export default RemoveButton;

RemoveButton.propTypes = {
  songName: PropTypes.string,
  saveSong: PropTypes.func
} 