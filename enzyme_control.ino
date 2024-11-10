const int enzymeThreshold = 500; // Threshold for detecting effective enzyme use
bool enzymeApplied = false;

void loop() {
  int sensorValue = analogRead(sensorPin);

  // Monitor enzyme application during detachment
  if (enzymeApplied && sensorValue > enzymeThreshold) {
    Serial.println("Enzyme application successful: Pacemaker detaching safely.");
    sendAlert("Enzyme Detachment Successful");
  }
}

void applyEnzyme() {
  enzymeApplied = true; // Flag to indicate enzyme application
  Serial.println("Enzyme released");
}
