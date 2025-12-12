import dotenv from "dotenv";

dotenv.config({ path: "../", quiet: true });

/**
 * Permet de renvoyer une variable d'environnement,
 * si celle-ci est `undefined` alors on renvoit `replace`.
 * @param {string} key
 * @param {string} replace
 * @returns {string} valeur associé à la clé ou `replace`.
 */
function getEnv(key, replace) {
  const value = Object.entries(process.env).find((v) => v[0] === key);
  return value ? value[1] : replace;
}

export { getEnv };
