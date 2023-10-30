import inquirerMenu from './inquirer.js'
import { leerInput } from './inquirer.js'
import Tarea from './tarea.js'
import Tareas from './tareas.js'
import { pausa } from './inquirer.js'

const main = async () => {
  let opt = ''
  const tareas = new Tareas()

  do {
    opt = await inquirerMenu()
    switch (opt) {
      case '1':
        const desc = await leerInput('Descripción: ')
        console.log(desc);
        tareas.crearTarea(desc)
        break;
      case '2':
        console.log(tareas._listado);
    }

    await pausa()
  } while (opt !== '0')

}
main()

