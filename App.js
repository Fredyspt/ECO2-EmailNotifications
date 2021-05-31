function App() {
  // Create machines' objects
  let d20 = CheckD20();
  let d202 = CheckD202();
  let d203 = CheckD203();
  let d18 = CheckD18();
  let d13_2 = CheckD13_2();
  let d13_3 = CheckD13_3();
  let dp1 = CheckDP1();
  let dp2 = CheckDP2();
  let dp3 = CheckDP3();
  let dp4 = CheckDP4();
  let dp5 = CheckDP5();
  let pac = CheckPAC();

  // if object's somethingWrong is true, then machine is not ok
  let isD20Ok = !d20.somethingWrong;
  let isD202Ok = !d202.somethingWrong;
  let isD203Ok = !d203.somethingWrong;
  let isD18Ok = !d18.somethingWrong;
  let isD13_2Ok = !d13_2.somethingWrong;
  let isD13_3Ok = !d13_3.somethingWrong;
  let isDP1Ok = !dp1.somethingWrong;
  let isDP2Ok = !dp2.somethingWrong;
  let isDP3Ok = !dp3.somethingWrong;
  let isDP4Ok = !dp4.somethingWrong;
  let isDP5Ok = !dp5.somethingWrong;
  let isPACOk = !pac.somethingWrong;

  // Assing machines notifications flags
  let notifyD20 = d20.sendNotification;
  let notifyD202 = d202.sendNotification;
  let notifyD203 = d203.sendNotification;
  let notifyD18 = d18.sendNotification;
  let notifyD132 = d13_2.sendNotification;
  let notifyD133 = d13_3.sendNotification;
  let notifyDP1 = dp1.sendNotification;
  let notifyDP2 = dp2.sendNotification;
  let notifyDP3 = dp3.sendNotification;
  let notifyDP4 = dp4.sendNotification;
  let notifyDP5 = dp5.sendNotification;
  let notifyPAC = pac.sendNotification;

  let notifications = [notifyD20, notifyD202, notifyD203, notifyD18, notifyD132, notifyD133, 
                       notifyDP1, notifyDP2, notifyDP3, notifyDP4, notifyDP5, notifyPAC];

  // Check if some machines need to send a notification
  let sendNotification = notifications.some(Boolean);

  // Create HTML template for mail's body.
  let htmlTemplate = HtmlService.createTemplateFromFile("Mail");
  //D20 data
  htmlTemplate.d20Fail              = !isD20Ok;
  htmlTemplate.d20SodaConcentration = d20.sodaConcentration;
  htmlTemplate.d20ViscosityNoe      = d20.viscosityNoe;
  htmlTemplate.d20SolidsNoe         = d20.solidsNoe;
  htmlTemplate.d20ThicknessNoe      = d20.thicknessNoe;
  htmlTemplate.d20ViscosityNoria    = d20.viscosityNoria;
  htmlTemplate.d20SolidsNoria       = d20.solidsNoria;
  htmlTemplate.d20ThicknessNoria    = d20.thicknessNoria;
  htmlTemplate.d20ChemicalColors    = d20.chemicalColors;
  htmlTemplate.d20Responsible       = d20.responsible;
  htmlTemplate.d20Timestamp         = d20.timestamp;

  //D20-2 data
  htmlTemplate.d202Fail              = !isD202Ok;
  htmlTemplate.d202SodaConcentration = d202.sodaConcentration;
  htmlTemplate.d202ViscosityNoe      = d202.viscosityNoe;
  htmlTemplate.d202SolidsNoe         = d202.solidsNoe;
  htmlTemplate.d202ThicknessNoe      = d202.thicknessNoe;
  htmlTemplate.d202ViscosityNoria    = d202.viscosityNoria;
  htmlTemplate.d202SolidsNoria       = d202.solidsNoria;
  htmlTemplate.d202ThicknessNoria    = d202.thicknessNoria;
  htmlTemplate.d202ChemicalColors    = d202.chemicalColors;
  htmlTemplate.d202Responsible       = d202.responsible;
  htmlTemplate.d202Timestamp         = d202.timestamp;
  
  //D20-3 data
  htmlTemplate.d203Fail              = !isD203Ok;
  htmlTemplate.d203SodaConcentration = d203.sodaConcentration;
  htmlTemplate.d203ViscosityNoe      = d203.viscosityNoe;
  htmlTemplate.d203SolidsNoe         = d203.solidsNoe;
  htmlTemplate.d203ThicknessNoe      = d203.thicknessNoe;
  htmlTemplate.d203ViscosityNoria    = d203.viscosityNoria;
  htmlTemplate.d203SolidsNoria       = d203.solidsNoria;
  htmlTemplate.d203ThicknessNoria    = d203.thicknessNoria;
  htmlTemplate.d203ChemicalColors    = d203.chemicalColors;
  htmlTemplate.d203Responsible       = d203.responsible;
  htmlTemplate.d203Timestamp         = d203.timestamp;

  //D18 data
  htmlTemplate.d18Fail              = !isD18Ok;
  htmlTemplate.d18SodaConcentration = d18.sodaConcentration;
  htmlTemplate.d18ViscosityNoe      = d18.viscosityNoe;
  htmlTemplate.d18SolidsNoe         = d18.solidsNoe;
  htmlTemplate.d18ThicknessNoe      = d18.thicknessNoe;
  htmlTemplate.d18ViscosityNoria    = d18.viscosityNoria;
  htmlTemplate.d18SolidsNoria       = d18.solidsNoria;
  htmlTemplate.d18ThicknessNoria    = d18.thicknessNoria;
  htmlTemplate.d18ChemicalColors    = d18.chemicalColors;
  htmlTemplate.d18Responsible       = d18.responsible;
  htmlTemplate.d18Timestamp         = d18.timestamp;

  //D13-2 data
  htmlTemplate.d13_2Fail           = !isD13_2Ok;
  htmlTemplate.d13_2ViscosityNoe   = d13_2.viscosityNoe;
  htmlTemplate.d13_2SolidsNoe      = d13_2.solidsNoe;
  htmlTemplate.d13_2ThicknessNoe   = d13_2.thicknessNoe;
  htmlTemplate.d13_2ViscosityNoria = d13_2.viscosityNoria;
  htmlTemplate.d13_2SolidsNoria    = d13_2.solidsNoria;
  htmlTemplate.d13_2ThicknessNoria = d13_2.thicknessNoria;
  htmlTemplate.d13_2ChemicalColors = d13_2.chemicalColors;
  htmlTemplate.d13_2Responsible    = d13_2.responsible;
  htmlTemplate.d13_2Timestamp      = d13_2.timestamp;

  //D13-3 data
  htmlTemplate.d13_3Fail           = !isD13_3Ok;
  htmlTemplate.d13_3ViscosityNoe   = d13_3.viscosityNoe;
  htmlTemplate.d13_3SolidsNoe      = d13_3.solidsNoe;
  htmlTemplate.d13_3ThicknessNoe   = d13_3.thicknessNoe;
  htmlTemplate.d13_3ViscosityNoria = d13_3.viscosityNoria;
  htmlTemplate.d13_3SolidsNoria    = d13_3.solidsNoria;
  htmlTemplate.d13_3ThicknessNoria = d13_3.thicknessNoria;
  htmlTemplate.d13_3ChemicalColors = d13_3.chemicalColors;
  htmlTemplate.d13_3Responsible    = d13_3.responsible;
  htmlTemplate.d13_3Timestamp      = d13_3.timestamp;

  //DP1 data
  htmlTemplate.dp1Fail              = !isDP1Ok;
  htmlTemplate.dp1SodaConcentration = dp1.sodaConcentration;
  htmlTemplate.dp1ChemicalColor     = dp1.chemicalColor;
  htmlTemplate.dp1Responsible       = dp1.responsible;
  htmlTemplate.dp1Timestamp         = dp1.timestamp;

  //DP2 data
  htmlTemplate.dp2Fail              = !isDP2Ok;
  htmlTemplate.dp2SodaConcentration = dp2.sodaConcentration;
  htmlTemplate.dp2ChemicalColor     = dp2.chemicalColor;
  htmlTemplate.dp2Responsible       = dp2.responsible;
  htmlTemplate.dp2Timestamp         = dp2.timestamp;

  //DP3 data
  htmlTemplate.dp3Fail              = !isDP3Ok;
  htmlTemplate.dp3SodaConcentration = dp3.sodaConcentration;
  htmlTemplate.dp3ChemicalColor     = dp3.chemicalColor;
  htmlTemplate.dp3Responsible       = dp3.responsible;
  htmlTemplate.dp3Timestamp         = dp3.timestamp;
  
  //DP4 data
  htmlTemplate.dp4Fail              = !isDP4Ok;
  htmlTemplate.dp4SodaConcentration = dp4.sodaConcentration;
  htmlTemplate.dp4ChemicalColor     = dp4.chemicalColor;
  htmlTemplate.dp4Responsible       = dp4.responsible;
  htmlTemplate.dp4Timestamp         = dp4.timestamp;
  
  //DP5 data
  htmlTemplate.dp5Fail              = !isDP5Ok;
  htmlTemplate.dp5SodaConcentration = dp5.sodaConcentration;
  htmlTemplate.dp5ChemicalColor     = dp5.chemicalColor;
  htmlTemplate.dp5Responsible       = dp5.responsible;
  htmlTemplate.dp5Timestamp         = dp5.timestamp;

  //PAC data
  htmlTemplate.pacFail              = !isPACOk;
  htmlTemplate.pacSodaConcentration = pac.sodaConcentration;
  htmlTemplate.pacChemicalColor     = pac.chemicalColor;
  htmlTemplate.pacResponsible       = pac.responsible;
  htmlTemplate.pacTimestamp         = pac.timestamp;

  let htmlForEmail = htmlTemplate.evaluate().getContent();

  let notify = () => {
    // if machine is Ok, then there's no need no notify, hence notified = No
    if(isD20Ok) {d20.notified.setValue("No");}
    // If machine is not ok, hasn't been notified (notified != Si), then notifies.
    if(!isD20Ok && d20.notified.getValue() != "Si") {d20.notified.setValue("Si");}
    
    if(isD202Ok) {d202.notified.setValue("No");}
    if(!isD202Ok && d202.notified.getValue() != "Si") {d202.notified.setValue("Si");}
    
    if(isD203Ok) {d203.notified.setValue("No");}
    if(!isD203Ok && d203.notified.getValue() != "Si") {d203.notified.setValue("Si");}

    if(isD18Ok) {d18.notified.setValue("No");}
    if(!isD18Ok && d18.notified.getValue() != "Si") {d18.notified.setValue("Si");}

    if(isD13_2Ok) {d13_2.notified.setValue("No");}
    if(!isD13_2Ok && d13_2.notified.getValue() != "Si") {d13_2.notified.setValue("Si");}

    if(isD13_3Ok) {d13_3.notified.setValue("No");}
    if(!isD13_3Ok && d13_3.notified.getValue() != "Si") {d13_3.notified.setValue("Si");}

    if(isDP1Ok) {dp1.notified.setValue("No");}
    if(!isDP1Ok && dp1.notified.getValue() != "Si") {dp1.notified.setValue("Si");}

    if(isDP2Ok) {dp2.notified.setValue("No");}
    if(!isDP2Ok && dp2.notified.getValue() != "Si") {dp2.notified.setValue("Si");}

    if(isDP3Ok) {dp3.notified.setValue("No");}
    if(!isDP3Ok && dp3.notified.getValue() != "Si") {dp3.notified.setValue("Si");}
    
    if(isDP4Ok) {dp4.notified.setValue("No");}
    if(!isDP4Ok && dp4.notified.getValue() != "Si") {dp4.notified.setValue("Si");}
    
    if(isDP5Ok) {dp5.notified.setValue("No");}
    if(!isDP5Ok && dp5.notified.getValue() != "Si") {dp5.notified.setValue("Si");}

    if(isPACOk) {pac.notified.setValue("No");}
    if(!isPACOk && pac.notified.getValue() != "Si") {pac.notified.setValue("Si");}
  }

  notify();

  if(sendNotification){
    let subject = "Parametros fuera de rango";
    let body = {htmlBody: htmlForEmail};
    SendEmail(subject, body);

  }
}