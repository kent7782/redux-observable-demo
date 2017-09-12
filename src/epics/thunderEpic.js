const thunderEpic = action$ =>
  action$.ofType('THUNDER')
    .delay(1200) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'FLASH' });

export default thunderEpic;
