import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recapcha';

  myRecaptcha = new FormControl(false);
 
    onScriptLoad() {
        console.log('Google reCAPTCHA loaded and is ready for use!')
    }
 
    onScriptError() {
        console.log('Something went long when loading the Google reCAPTCHA')
    }
}
