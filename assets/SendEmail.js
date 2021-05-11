function SendEmail(subject, body) {
  // Fetch email address
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Emails");
  var dataRange = sheet.getRange("B2:B4");
  var emailAddresses = dataRange.getValues();

  GmailApp.sendEmail(emailAddresses, subject, "", body);
  
}