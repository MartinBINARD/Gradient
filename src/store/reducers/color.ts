import { createAction, createReducer } from '@reduxjs/toolkit';
import { AppState, TColor, TDirection } from '../../@types';

const initialState: AppState = {
  firstColor: '#b0b',
  lastColor: '#c0ffee',
  direction: '90deg',
  nbColors: 0,
};

// on va créer une action pour le changement de direction
/*
  Pour créer une action, on se sert de `createAction`

  `const myAction = createAction('my-action');`

  Note : cette syntaxe crée une action SANS PAYLOAD
  (type = ActionCreatorWithoutPayload)
  
    > j'aurai un objet Action de type :
    >
    > ```
    > {
    >   type: 'my-action'
    >   payload: undefined
    > }
    > ```

  Pour ajouter un payload, on DOIT préciser son type dans
  la fonction (type: ActionCreatorWithPayload)

  `const myAction = createAction<MonType>('my-action');`

  Automatiquement, j'aurai un objet Action de type :

  `
  {
    type: 'my-action'
    payload: MonType
  }
  `
*/
export const changeDirection = createAction<TDirection>(
  'color/change-direction'
);
// console.log(changeDirection('270deg'));
//     output :
//     Object { type: "color/change-direction", payload: "270deg" }

export const changeFirstColor = createAction<TColor>('color/first');
export const changeLastColor = createAction<TColor>('color/last');

const colorReducer = createReducer(initialState, (builder) => {
  // pour ajouter une action :
  builder
    .addCase(changeDirection, (state, action) => {
      // avec Immer, je peux changer directement la valeur dans mon state
      state.direction = action.payload;
    })
    .addCase(changeFirstColor, (state, action) => {
      state.firstColor = action.payload;
      state.nbColors += 1;
    })
    .addCase(changeLastColor, (state, action) => {
      state.lastColor = action.payload;
      state.nbColors += 1;
    });
});

export default colorReducer;
