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
}

//se supone que al final _listado y listado son lo mismo, pero uno es un objeto y el otro es un arreglo