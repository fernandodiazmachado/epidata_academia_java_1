class Receta {
  constructor(nombreReceta) {
    this.nombre = nombreReceta;
    this.ingredientes = [];
  }

  addIngrediente(ingrediente, cantidad) {
    this.ingredientes.push([ingrediente, cantidad]);
  }

  get getNombre() {
    return this.nombre;
  }
}

export { Receta };
