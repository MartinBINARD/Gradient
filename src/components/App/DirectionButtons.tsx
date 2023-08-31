import { useDispatch } from 'react-redux';

import { changeDirection } from '../../store/reducers/color';
import { TDirection } from '../../@types';

function DirectionButtons() {
  const dispatch = useDispatch();

  // méthode « répétitive »
  // 1 bouton = 1 direction = 1 dispatch
  const handleChangeTo45 = (event) => {
    dispatch(changeDirection('45deg'));
  };
  const handleChangeTo90 = (event) => {
    dispatch(changeDirection('90deg'));
  };

  // méthode curryfiée qui permet un appel en 2 temps à notre handler :
  //  - 1er temps lors de la déclaration, je donne ma direction
  //  - 2nd temps lors du clic, `event` est donné
  const handleDirection = (direction: TDirection) => () => {
    dispatch(changeDirection(direction));
  };

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        onClick={(event) => handleChangeTo45(event)}
      >
        45°
      </button>
      <button
        type="button"
        className="button"
        onClick={(event) => handleChangeTo90(event)}
      >
        90°
      </button>
      <button
        type="button"
        className="button"
        onClick={handleDirection('135deg')}
      >
        135°
      </button>
      <button
        type="button"
        className="button"
        onClick={handleDirection('225deg')}
      >
        225°
      </button>
      <button
        type="button"
        className="button"
        onClick={handleDirection('270deg')}
      >
        270°
      </button>
      <button
        type="button"
        className="button"
        onClick={handleDirection('315deg')}
      >
        315°
      </button>
    </div>
  );
}

export default DirectionButtons;
