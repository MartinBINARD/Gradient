import { useAppSelector } from '../../hooks/redux';

function Colors() {
  /*
    Je veux récupérer `firstColor` et `lastColor` depuis
    mon state (qui est dans le store Redux)

    J'utilise `useAppSelector` (la version typée de `useSelector`)
  */
  const firstColor = useAppSelector((state) => state.color.firstColor);
  const lastColor = useAppSelector((state) => state.color.lastColor);

  // ATTENTION Mauvaise idée :
  // `useAppSelector` abonne le composant au retour du sélecteur
  // ici, on re-rend `<Colors />` à chaque fois que `state.color` est modifié
  // donc même si c'est `direction` qui change
  // → re-rendu inutile = perte de performance
  // const { firstColor, lastColor } = useAppSelector((state) => state.color);
  //
  // Cause :
  // après un dispatch, TOUS les sélecteurs sont exécutés (subscribe)
  // → si le retour du sélecteur a changé, on re-rend le composant

  return (
    <div className="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      {' - '}
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}

export default Colors;
