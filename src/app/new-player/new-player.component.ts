import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  // player = new NewPlayerComponent();
  constructor() { }

  ngOnInit(): void {
  }
  saveData(){
   this.playerd;
   this.teamss;
   console.log(this.teamss, this.playerd);
  }

}
