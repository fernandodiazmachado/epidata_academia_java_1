import { RecetaCompleja } from "./recetaCompleja.js";

let r = new RecetaCompleja("torta opera");

r.addIngrediente("harina", 300);
r.addIngrediente("manteca", 300);
r.addIngrediente("huevos", 3);

console.log(r.addHabilidad("pasteleria"));
console.log(r.addHabilidad("cocina francesa"));
console.log(r.addHabilidad("pasteleria"));

console.log(r.habilidades);
