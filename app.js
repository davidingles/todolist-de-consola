import inquirerMenu from './inquirer.js'
import Tarea from './tarea.js'
import Tareas from './tareas.js'
import { pausa } from './inquirer.js'

const main = async () => {
  let opt = ''
  do {
    opt = await inquirerMenu()
    console.log({ opt })

    await pausa()
  } while (opt !== '0')

}
main()

