import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
//configure(require.context('../stories', true, /\.stories\.js$/), module);


const req = require.context('../stories', true, /\.stories\.js$/);



configure(req, module);