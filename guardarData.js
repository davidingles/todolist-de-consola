import fs from 'node:fs'

const guardarData = (data) => {
  fs.writeFileSync('./dataTareas.json', JSON.stringify(data))
}

export const leerData = () => {
  if (!fs.existsSync('./dataTareas.json')) {
    return null
  }
  const data = fs.readFileSync('./dataTareas.json', { encoding: 'utf-8' })
  const dataParse = JSON.parse(data)
  return dataParse
}

export default guardarData