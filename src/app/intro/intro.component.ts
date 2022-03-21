import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  submitSuccess = true
  submitResponse = ""
  nameInput = ""
  firstName = ""
  lastName = ""
  fullName = ""

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitFields() {
    this.nameInput = this.nameInput.trim()
    if (this.nameInput.includes(" ")) {
      let nameComponents = this.nameInput.split(' ');
      this.submitSuccess = true
      this.firstName = nameComponents[0];
      this.lastName = nameComponents[nameComponents.length - 1];
      this.fullName = `${this.firstName} ${this.lastName}`;
      this.submitResponse = `Your name is ${this.fullName}`;
    } else {
      this.submitSuccess = false;
      this.submitResponse = "Please add more than one word"
    }
  }

}
