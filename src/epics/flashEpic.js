const flashEpic = action$ =>
  action$.ofType('FLASH')
    .delay(1500) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'NONE' });

export default flashEpic;
