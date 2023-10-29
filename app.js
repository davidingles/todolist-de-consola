import inquirerMenu from './inquirer.js'

const main = async () => {
  let opt = ''
  do {
    opt = await inquirerMenu()
    console.log({ opt })
  } while (opt !== '0')

}
main()