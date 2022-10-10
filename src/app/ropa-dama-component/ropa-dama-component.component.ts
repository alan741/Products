import { Component, OnInit } from '@angular/core';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-ropa-dama-component',
  templateUrl: './ropa-dama-component.component.html',
  styleUrls: ['./ropa-dama-component.component.css']
})
export class RopaDamaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  helloWorld(){
    alert("ay holaaa");
  }

  okClicked () {
      notify("The OK button was clicked")
  }

  listItems = [{
    text: 'Cars',
    badge: '12'
  }, {
    text: 'Bikes',
    badge: '5'
  }];
}
