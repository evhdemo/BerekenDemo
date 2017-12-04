import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bereken',
  templateUrl: './bereken.component.html',
  styleUrls: ['./bereken.component.css']
})
export class BerekenComponent implements OnInit {

  soorten:string[] = 
    ["som",
    "verschil",
    "product",
    "quotient"
  ];
  soort:string;
  getal1:number;
  getal2:number;
  result:any;

  constructor() {

     }

  ngOnInit() {
    this.soort = "som"
  }

  berekenSom(
    getal1:number,
    getal2:number){
      var Result = getal1 + getal2;
      return Result;
  }

  berekenVerschil(
    getal1:number,
    getal2:number){
      var Result = getal1 - getal2;
      return Result;
  }

  berekenProduct(
    getal1:number,
    getal2:number){
      var Result = getal1 * getal2;
      return Result;
  }

  berekenQuotient(
    getal1:number,
    getal2:number){
      var Result = getal1 / getal2;
      return Result;
  }

  bereken(
    soort:string,
    getal1:number,
    getal2:number){

    switch(soort) {
      case "som":
        this.result = this.berekenSom(getal1,getal2);
        break;
      case "verschil":
        this.result = this.berekenVerschil(getal1,getal2);
        break;
      case "product":
        this.result = this.berekenProduct(getal1,getal2);
        break;
      case "quotient":
        this.result = this.berekenQuotient(getal1,getal2);
        break;
    }

return this.result;

  }

}
