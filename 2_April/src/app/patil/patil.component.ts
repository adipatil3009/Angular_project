import { Component } from '@angular/core';

@Component({
  selector: 'app-patil',
  templateUrl: './patil.component.html',
  styleUrls: ['./patil.component.css']
})
export class PatilComponent {
  public Name='adi patil'

  /**
   * rename
   */
  public rename() {
    return "I'm from India"
  }
}
