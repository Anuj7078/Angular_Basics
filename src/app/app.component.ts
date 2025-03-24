import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // If you're using SCSS
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl = 'assets/BL_Logo.jpg';  // Path to the logo image
}
