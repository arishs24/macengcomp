#include <WiFi.h>
#include <HTTPClient.h>

const int sensorPin = A0;  // Pin for the strain gauge sensor
const int adhesionThreshold = 300; // Threshold for detecting detachment

void setup() {
  Serial.begin(9600);
  WiFi.begin("Your_SSID", "Your_PASSWORD"); // Connect to Wi-Fi
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
  }
}

void loop() {
  int sensorValue = analogRead(sensorPin); // Read sensor data
  Serial.println(sensorValue);

  // Check if the pacemaker is detaching
  if (sensorValue < adhesionThreshold) {
    sendAlert("Detachment Alert: Adhesion is weak.");
  }
  delay(500);
}

void sendAlert(String message) {
  HTTPClient http;
  http.begin("http://localhost:4000/update");
  http.addHeader("Content-Type", "application/json");
  String data = "{\"alert\": \"" + message + "\", \"sensorValue\": " + String(sensorValue) + "}";
  http.POST(data);
  http.end();
}
