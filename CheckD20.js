function CheckD20(){
    // Fetch current values
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const worksheet = spreadsheet.getSheetByName("Current Values");
  
    // (row, column, numRows, numColumns)
    var dataRange = worksheet.getRange("B2:B8");
    var data = dataRange.getValues();
  
    var sodaConcentration = data[0];
    var viscosityNoe = data[1];
    var solidsNoe = data[2];
    var thicknessNoe = data[3];
    var viscosityNoria = data[4];
    var solidsNoria = data[5];
    var thicknessNoria = data[6];
  
    var SodaOk = sodaConcentration > 9 || sodaConcentration < 11;
    var vNoeOk = viscosityNoe > 2.1 || viscosityNoe < 3.5;
    var sNoeOk = solidsNoe > 17 || solidsNoe < 23;
    var tNoeOk = thicknessNoe > 0.7 || thicknessNoe < 0.9;
    var vNoriaOk = viscosityNoria > 1.8 || viscosityNoria < 3.0;
    var sNoriaOk = solidsNoria > 31 || solidsNoria < 37;
    var tNoriaOk = thicknessNoria > 2.4 || thicknessNoria < 2.8;
  
    let chemicals = [SodaOk, vNoeOk, sNoeOk, tNoeOk, vNoriaOk, sNoriaOk, tNoriaOk];
  
    // If any value of the array is false, it returns false
    var somethingWrong = !chemicals.every(Boolean);

    if(somethingWrong){
      var subject = 'D20 Parametros fuera de rango';
      var message = createHtml();
      SendEmail(subject, message);
    }
  }

  function createHtml(){
      const htmlTemplate = HtmlService.createTemplateFromFile("emailD20");
      htmlTemplate.sodaConcentration = sodaConcentration;
      htmlTemplate.viscosityNoe = viscosityNoe;
      htmlTemplate.solidsNoe = solidsNoe;
      htmlTemplate.thicknessNoe = thicknessNoe;
      htmlTemplate.viscosityNoria = viscosityNoria;
      htmlTemplate.solidsNoria = solidsNoria;
      htmlTemplate.thicknessNoria = thicknessNoria;

      const htmlForEmail = htmlTemplate.evaluate().getContent();

      return htmlForEmail;
  }