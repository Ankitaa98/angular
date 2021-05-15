import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anki',
  templateUrl: './anki.component.html',
  styleUrls: ['./anki.component.css']
})
export class AnkiComponent implements OnInit {

  currentCustomer = 'Maria';
  bitwiseOR = 2 | 5
  i=0;
  someVar  = Math.random()
  constructor() { }
doSomeHeavyTask(){
  console.log('Called ${this.i++} times')
}
  ngOnInit() {
    setInterval(()=>{
      this.someVar = Math.random()
    },50)
  }

}
