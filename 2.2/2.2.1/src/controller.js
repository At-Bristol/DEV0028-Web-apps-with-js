import database from './model';

export const dbGet = condiment => {
  return database.condiment;
};

export const dbPut = (condiment, attributes ) => {
  database[condiment] = attributes;
  return true 
};

export const dbDelete = condiment => {
  delete database[condiment];
  return true;
};

export const updateDisplay = (el, value) => {
 document.getElementById(el).innerText(value)
};

export default condimentController; 
