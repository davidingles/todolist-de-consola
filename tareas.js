import Tarea from "./tarea.js"

export default class Tareas {
  constructor() {
    this._listado = {}
  }


  //el objetido de este getter es que cuando se llame a listadoArr, se devuelva un arreglo con todas las tareas en vez de un objeto
  get listadoArr() {
    const listado = []
    Object.keys(this._listado).forEach(key => {
      listado.push(this._listado[key])
    })
    return listado
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea
    })
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, i) => {
      const indice = `${i + 1}`.green
      const { desc, completadoEn } = tarea
      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red
      console.log(`${indice} ${desc} :: ${estado}`);
    })

  }

}