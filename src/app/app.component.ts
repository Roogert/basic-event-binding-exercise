import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageTwo = ""
  title = 'basic-event-binding-exercise';
  showMessage() {
    this.messageTwo = "Bricktastic"
    console.log("I want to be a LegoMaster")
  }

}
