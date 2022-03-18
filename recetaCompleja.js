import { Receta } from "./receta.js";

class RecetaCompleja extends Receta {
  constructor(nombre) {
    super(nombre);
    this.habilidades = [];
  }

  addHabilidad(habilidad) {
    if (!this.habilidades.includes(habilidad)) {
      this.habilidades.push(habilidad);
      return true;
    } else {
      return false;
    }
  }
}

export { RecetaCompleja };
