import crypto from 'crypto'

export default class Tarea {

  constructor(desc) {
    this.id = crypto.randomUUID();
    this.desc = desc;
    this.completadoEn = null;
  }

}

