import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';

function NbColors() {
  /*
    Pour LIRE les données depuis le store,
    on utilise `useSelector`.

    `useSelector` prend un callback qui a le state en paramètre
    et retourne notre valeur.

    Ce callback est un **selector** (d'où le nom du hook)…
    C'est-à-dire une fonction qui, à partir du state, retourne
    tout ou partie du state, calculée ou non

    - « tout ou partie » : retourner le state en entier ou seulement une portion
    - « calculée ou non » : retourne la valeur telle quelle ou après un calcul
        (traitement)

    Rappel : quand on a plusieurs reducer, on n'oublie qu'il est
    ajouté au state (global) en propriété
    → state.color.nbColors

    En parallèle, `useSelector` abonne/souscrit (_subscribe_) le composant
    à la modification de ce qui est retourné par le _selector_
    → ici, à chaque fois que `nbColors`,
      le composant `<NbColors />` sera re-rendu

    ATTENTION :
    on utilise la version TYPÉE de `useSelector` (`useAppSelector`)
  */
  const nbColors = useAppSelector((state) => state.color.nbColors);

  return <div className="nbColors">{nbColors} couleur(s) générée(s)</div>;
}

export default NbColors;
