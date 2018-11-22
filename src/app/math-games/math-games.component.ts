import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-games',
  templateUrl: './math-games.component.html',
  styleUrls: ['./math-games.component.scss']
})
export class MathGamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atharvpic = '../assets/images/atharv.jpg';
  jamipic = '../assets/images/jami.jpg';
  marbleInput = null;
  fractionGameCorrectAnswer= 18;
  showAnswerraction = false;
  checkAnsweFractions = false;

}
