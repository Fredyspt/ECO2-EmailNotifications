function CheckDP3() {
  // Fetch current values
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const worksheet = spreadsheet.getSheetByName("Current Values");

  // (row, column, numRows, numColumns)
  const dataRange = worksheet.getRange("B42");
  let data = dataRange.getValue();

  // Name data 
  let sodaConcentration = data;
  let responsible = worksheet.getRange("D42").getValue();
  
  // Get measurement timestamp and format it
  let rawTimestamp = worksheet.getRange("E42").getValue();
  let timestamp = Utilities.formatDate(rawTimestamp, "GMT-6","dd/MM/yyyy HH:mm:ss");
  let timestampHour = Utilities.formatDate(rawTimestamp, "GMT-6","HH:mm");

  // Check permissive range 
  let cSodaOk = sodaConcentration >= 9 && sodaConcentration <= 11;

  // Depending on chemical status, returns class name for HTML
  let chemicalColor = cSodaOk ? "center good" : "center bad";
   
  // If chemical is not Ok, it returns false
  let somethingWrong = !cSodaOk;

  // Evaluate if a notification must be sent
  let notified = worksheet.getRange("F42");
  let sendNotification;

  // Get notification time value
  let rawNotificationTime = worksheet.getRange("G42").getValue();
  // Substract hours and minutes from notification time
  let notificationHour = Utilities.formatDate(rawNotificationTime, "GMT-6","HH:mm");
  // Sets notificaton time on cell  
  let setNotificationTime = (time) => {worksheet.getRange("G42").setValue(time)}

  if(somethingWrong && notified.getValue() === "Si"){
    // If last timestamp equals notificationHour, then a notification has been already sent
    if(timestampHour == notificationHour) {
      sendNotification = false;
      } else {
        sendNotification = true;
        setNotificationTime(timestamp);
      }
  } else if (somethingWrong && notified.getValue() === "No"){
    sendNotification = true;
    setNotificationTime(timestamp);
  } else {
    sendNotification = false;
  }

  return {
    sodaConcentration,
    responsible,
    timestamp,
    chemicalColor,
    somethingWrong,
    sendNotification,
    notified
  }
}
