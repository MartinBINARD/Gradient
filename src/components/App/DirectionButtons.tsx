import { useDispatch } from 'react-redux';

import { changeDirection } from '../../store/reducers/color';

function DirectionButtons() {
  const dispatch = useDispatch();

  // méthode curryfiée qui permet un appel en 2 temps à notre handler :
  //  - 1er temps lors de la déclaration, je donne ma direction
  //  - 2nd temps lors du clic, `event` est donné
  const handleDirection = (direction) => (event) => {
    dispatch(changeDirection(direction));
  };

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        onClick={handleDirection('45deg')}
      >
        45°
      </button>
      <button
        type="button"
        className="button"
        onClick={handleDirection('90deg')}
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
