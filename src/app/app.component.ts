import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl = 'assets/BL_Logo.jpg';  // Path to the logo image
  userName = '';  // Property to hold the user's name

  // Method to open the BridgeLabz website in a new tab when logo is clicked
  openWebsite() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
