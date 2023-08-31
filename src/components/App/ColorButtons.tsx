import { useDispatch } from 'react-redux';

import { changeFirstColor, changeLastColor } from '../../store/reducers/color';
import { randomHexColor } from '../../utils/color';

function ColorButtons() {
  // https://react.dev/warnings/invalid-hook-call-warning
  const dispatch = useDispatch();

  const handleClickFirst = () => {
    // J'émets mon intention
    // je dispatch une action
    dispatch(changeFirstColor(randomHexColor()));
  };

  const handleClickLast = () => {
    // J'émets mon intention
    // je dispatch une action
    dispatch(changeLastColor(randomHexColor()));
  };

  const handleClickAll = () => {
    handleClickFirst();
    handleClickLast();
  };

  return (
    <div className="buttons group">
      <button type="button" className="button" onClick={handleClickFirst}>
        Random First
      </button>
      <button type="button" className="button" onClick={handleClickAll}>
        Random All
      </button>
      <button type="button" className="button" onClick={handleClickLast}>
        Random Last
      </button>
    </div>
  );
}

export default ColorButtons;
