import inquirer from 'inquirer';
import 'colors';

const preguntas = [
  {
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Search city`
      },
      {
        value: '2',
        name: `${'2.'.green} History`
      },
      {
        value: '0',
        name: `${'0.'.green} Exit`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log('   Select an option'.white);
  console.log('===========================\n'.green);

  const { option } = await inquirer.prompt(preguntas);

  return option;
};

export default inquirerMenu


