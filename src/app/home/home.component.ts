import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Jamis app';
  age = '12';
  img = 'https://www.tripsavvy.com/thmb/E0-rht-KJssGsOh_U_86SdVfyyo=/1266x844/filters:no_upscale():max_bytes(150000):strip_icc()/Trinity-College-59556a815f9b5815d9038314.jpg';
  pic = '../assets/images/mypic.jpg';
  kyrievid = '../assets/videos/kyrie.mp4';
  camvid = '../assets/videos/camvideo.mp4';
  randompoints = 0;
  ageInput = null;
  playerAge = 26;
  ageDifference = null;

  getRandomPoints() {
    this.randompoints = Math.floor(Number((Math.random() * 89) + this.age));

  }
  getAgeDifference() {this.ageDifference = this.playerAge - this.ageInput;
    this.ageDifference = Math.abs(this.ageDifference)}
    
    
    }
