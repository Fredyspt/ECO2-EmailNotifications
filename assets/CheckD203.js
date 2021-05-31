function CheckD203(){
  // Fetch current values
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const worksheet = spreadsheet.getSheetByName("Current Values");

  // (row, column, numRows, numColumns)
  const dataRange = worksheet.getRange("B57:B63");
  let data = dataRange.getValues();

  // Name data 
  let sodaConcentration = data[0];
  let viscosityNoe = data[1];
  let solidsNoe = data[2];
  let thicknessNoe = data[3];
  let viscosityNoria = data[4];
  let solidsNoria = data[5];
  let thicknessNoria = data[6];
  let responsible = worksheet.getRange("D57").getValue();
  
  // Get measurement timestamp and format it
  let rawTimestamp = worksheet.getRange("E57").getValue();
  let timestamp = Utilities.formatDate(rawTimestamp, "GMT-6","dd/MM/yyyy HH:mm:ss");
  let timestampHour = Utilities.formatDate(rawTimestamp, "GMT-6","HH:mm");

  // Check permissive range 
  let cSodaOk = sodaConcentration >= 9 && sodaConcentration <= 11;
  let vNoeOk = viscosityNoe >= 2.1 && viscosityNoe <= 3.5;
  let sNoeOk = solidsNoe >= 17 && solidsNoe <= 23;
  let tNoeOk = thicknessNoe >= 0.7 && thicknessNoe <= 0.9;
  let vNoriaOk = viscosityNoria >= 1.8 && viscosityNoria <= 3.0;
  let sNoriaOk = solidsNoria >= 31 && solidsNoria <= 37;
  let tNoriaOk = thicknessNoria >= 2.4 && thicknessNoria <= 2.8;

  let chemicals = [cSodaOk, vNoeOk, sNoeOk, tNoeOk, vNoriaOk, sNoriaOk, tNoriaOk];

  // Depending on chemical status, returns class name for HTML
  let chemicalColors = chemicals.map(n => {
    if(n) {return "center good"} else {return "center bad"} 
  });

  // If every value of the array is true, it returns false
  // If any value of the array is false, it means the machine has 
  // a parameter out of range, them, somethingWrong returns true.
  let somethingWrong = !chemicals.every(Boolean);

  // Evaluate if a notification must be sent
  let notified = worksheet.getRange("F57");
  let sendNotification;

  // Sets notificaton time on cell  
  let setNotificationTime = (time) => {worksheet.getRange("G57").setValue(time)}
  // Get notification time value
  let rawNotificationTime = worksheet.getRange("G57").getValue();
  // Substract hours and minutes from notification time
  let notificationHour = Utilities.formatDate(rawNotificationTime, "GMT-6","HH:mm");

  if(somethingWrong && notified.getValue() === "Si"){
    // If last timestamp equals notificationHour, then a notification has been already sent
    if(timestampHour == notificationHour) {
      sendNotification = false;
      } else {
        sendNotification = true;
        setNotificationTime(new Date());
      }
  } else if (somethingWrong && notified.getValue() === "No"){
    sendNotification = true;
    setNotificationTime(new Date());
  } else {
    sendNotification = false;
  }

  return {
    sodaConcentration,
    viscosityNoe, 
    solidsNoe,
    thicknessNoe, 
    viscosityNoria, 
    solidsNoria, 
    thicknessNoria,
    responsible,
    timestamp,
    chemicalColors,
    somethingWrong,
    sendNotification,
    notified
  }
}
