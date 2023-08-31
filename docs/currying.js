function sum(a, b) {
  return a + b;
}

/*
  le _currying_ est le fait de transformer une fonction à X paramètres
  en une série de X fonctions à 1 seul paramètre.

  Se sert des **closures**, une fonction qui retourne une fonction
*/
function curryedSum(a) {
  return function (b) {
    return a + b;
  };
}

// en format fonction fléchée
function arrowCurryedSum = (a) => (b) => a + b;

/*
  Grâce à la forme curryfiée, je peux appeler ma fonction de manière partielle
*/
const partialSum = curryedSum(5);
const result = partialSum(8); // 13
const result2 = partialSum(10); // 15
/*
  Dans un handler d'évènement,
  je peux fixer une valeur lors de la déclaration de ma fonction
  et au click cette fonction revevra automatiquement "event"
 */
