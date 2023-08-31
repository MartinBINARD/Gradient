import { createAction, createReducer } from '@reduxjs/toolkit';

import { AppState } from '../../@types';

// je crée mon state initial
const initialState: AppState = {
  firstColor: '#b0b',
  lastColor: '#c0ffee',
  direction: '90deg',
  nbColors: 0,
};

// On va céer une action pour le changement de direction
const changeDirection = createAction('color/change-direction');
console.log(changeDirection('270deg'));

const colorReducer = createReducer(initialState, (builder) => {
  // pour ajouter une action
  builder.addCase(changeDirection, (state, action) => {
    // Avec Immer, je peux changer directement la valeur dans mon state
    state.direction = action.payload;
  });
});

export default colorReducer;
