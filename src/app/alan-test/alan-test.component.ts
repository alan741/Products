import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alan-test',
  templateUrl: './alan-test.component.html',
  styleUrls: ['./alan-test.component.css']
})
export class AlanTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = ['Peine', 'Zapato', 'Camisa', 'Pantalon'];
}
