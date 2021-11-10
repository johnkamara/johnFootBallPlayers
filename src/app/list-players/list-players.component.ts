import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  playerL: string = 'PLAYERS LIST';
  @ViewChild('f', { static: false }) signupForm: NgForm;
  teamss = ['Karene',
    'leone star',
    'kallon FC'];
 answer = '';

  suggestUserName() {
    const suggestedName = 'Johnny';

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }



  user = {
    username: '',
    Origin: '',
    Age: '',
    Position: '',
    Team: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.name;
    this.user.Origin = this.signupForm.value.origin;
    this.user.Age = this.signupForm.value.age;
    this.user.Position = this.signupForm.value.position;
    this.user.Team = this.signupForm.value.team;

    this.signupForm.reset();
  }


}
