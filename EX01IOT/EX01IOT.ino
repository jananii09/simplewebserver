void setup() {
  pinMode(13, OUTPUT);
  pinMode(1, INPUT);
}
void loop() {
  int button_status = digitalRead(1);
   if (button_status==HIGH)
     digitalWrite(13, HIGH);
   else
     digitalWrite(13, LOW);
  delay(1000);

}