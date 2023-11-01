import inquirerMenu from './inquirer.js'
import { leerInput } from './inquirer.js'
import Tarea from './tarea.js'
import Tareas from './tareas.js'
import { pausa } from './inquirer.js'
import guardarData, { leerData } from './guardarData.js'

const main = async () => {
  let opt = ''
  const tareas = new Tareas()
  const tareasData = leerData()
  if (tareasData) {
    tareas.cargarTareasFromArray(tareasData)
  }

  do {
    opt = await inquirerMenu()
    switch (opt) {
      case '1':
        const desc = await leerInput('Descripción: ')
        console.log(desc);
        tareas.crearTarea(desc)
        break;
      case '2':
        console.log(tareas.listadoCompleto());
        break;
      case '3': tareas.listadoPendientes(true)
        break;
      case '4': tareas.listadoPendientes(false)
        break;
    }


    await pausa()
  } while (opt !== '0')

  guardarData(tareas.listadoArr)

}
main()

