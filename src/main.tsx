import store from './store';
// import {
//   CHANGE_DIRECTION,
//   CHANGE_FIRST_COLOR,
//   CHANGE_LAST_COLOR,
// } from './store/reducers/color';

import { randomHexColor, generateSpanColor } from './utils/color';

import './styles/index.scss';
import { changeDirection } from './store/reducers/color';

function renderNbColors() {
  const state = store.getState();
  const { nbColors } = state.color;

  document.querySelector('.nbColors')!.innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState().color;

  document.querySelector<HTMLElement>('.gradient')!.style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState().color;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.querySelector('.colors')!.innerHTML = result;
}

renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// document.getElementById('randAll')!.addEventListener('click', () => {
//   const action = {
//     type: CHANGE_FIRST_COLOR,
//     payload: randomHexColor(),
//   };

//   store.dispatch(action);

//   store.dispatch({
//     type: CHANGE_LAST_COLOR,
//     payload: randomHexColor(),
//   });
// });

// document.getElementById('randFirst')!.addEventListener('click', () => {
//   const action = {
//     type: CHANGE_FIRST_COLOR,
//     payload: randomHexColor(),
//   };

//   store.dispatch(action);
// });

// document.getElementById('randLast')!.addEventListener('click', () => {
//   store.dispatch({
//     type: CHANGE_LAST_COLOR,
//     payload: randomHexColor(),
//   });
// });

document.getElementById('to270')!.addEventListener('click', () => {
  // store.dispatch({
  //   type: CHANGE_DIRECTION,
  //   payload: '270deg',
  // });
  store.dispatch(changeDirection('270deg'));
});

document.getElementById('to90')!.addEventListener('click', () => {
  // store.dispatch({
  //   type: CHANGE_DIRECTION,
  //   payload: '90deg',
  // });
  store.dispatch(changeDirection('90deg'));
});

document.getElementById('to45')!.addEventListener('click', () => {
  // store.dispatch({
  //   type: CHANGE_DIRECTION,
  //   payload: '45deg',
  // });
  store.dispatch(changeDirection('45deg'));
});

document.getElementById('to135')!.addEventListener('click', () => {
  // store.dispatch({
  //   type: CHANGE_DIRECTION,
  //   payload: '135deg',
  // });
  store.dispatch(changeDirection('135deg'));
});

document.getElementById('to225')!.addEventListener('click', () => {
  // store.dispatch({
  //   type: CHANGE_DIRECTION,
  //   payload: '225deg',
  // });
  store.dispatch(changeDirection('225deg'));
});

document.getElementById('to315')!.addEventListener('click', () => {
  // store.dispatch({
  //   type: CHANGE_DIRECTION,
  //   payload: '315deg',
  // });
  store.dispatch(changeDirection('315deg'));
});
