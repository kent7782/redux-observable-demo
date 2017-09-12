export default function reducer(state = { code: '...' }, action) {
  switch (action.type) {
    case 'THUNDER':
      return { code: 'THUNDER!!!' };

    case 'FLASH':
      return { code: 'FLASH!!!!!' };

    case 'NONE':
      return { code: '...' };

    default:
      return state;
  }
};
