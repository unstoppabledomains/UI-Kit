const fs = require('fs');

const colors = [
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'grey',
  'blueGrey'
];

const createColors = colors.map(async color => {
  await fs.promises.writeFile(`./${color}.ts`, `import {${color}} from '@mui/material/colors';

export default ${color};
`)
});

Promise.all(createColors).then(() => {
  console.log('done');
}).catch(console.error);
