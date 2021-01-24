import { readFileSync } from 'fs';
import path from 'path';

export const criptos = JSON.parse(readFileSync(path.join(__dirname, 'api.json')).toString()) 

export const CURRENCIES = [
  { code: "USD", name: "USA Dollar" },
  { code: "COP", name: "Colombian Peso" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "UK Pound" },
];



