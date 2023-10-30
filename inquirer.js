import inquirer from 'inquirer';
import 'colors';
import tituloCabecera from './tituloCabecera.js';

const preguntas = [
  {
    type: 'list',
    name: 'option',
    message: 'Qué quieres hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`
      },

    ]
  }
];

const inquirerMenu = async () => {
  tituloCabecera();
  const { option } = await inquirer.prompt(preguntas);

  return option;
};

export const pausa = async () => {

  const pausa = [
    {
      type: 'input',
      name: 'enter',
      message: `\n\nPresione ${'ENTER'.green} para continuar\n\n`
    }
  ];
  await inquirer.prompt(pausa);
}

export const leerInput = async (message) => {
  const question = {
    type: 'input',
    name: 'desc',
    message,
    validate(value) {
      if (value.length === 0) {
        return 'Por favor ingrese un valor'
      }
      return true
    }
  }
  const { desc } = await inquirer.prompt(question);
  return desc
}

export default inquirerMenu


