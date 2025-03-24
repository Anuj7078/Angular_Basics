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
  errorMessage = '';  // Property to hold the error message

  // Method to open the BridgeLabz website in a new tab when logo is clicked
  openWebsite() {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  // Method to validate the user input
  validateName() {
    // Check if the userName is at least 3 characters and starts with uppercase letter
    if (this.userName.length < 3) {
      this.errorMessage = 'Name must be at least 3 characters long.';
    } else if (this.userName[0] !== this.userName[0].toUpperCase()) {
      this.errorMessage = 'Name must start with an uppercase letter.';
    } else {
      this.errorMessage = '';  // Clear the error message if validation passes
    }
  }
}
