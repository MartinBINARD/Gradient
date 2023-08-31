/* eslint-disable import/prefer-default-export */
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

// Au lieu d'utiliser `useSelector` qui n'est pas typé,
// je crée un hook (basé sur useSelector) typé
// → on décrit le type `state`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
