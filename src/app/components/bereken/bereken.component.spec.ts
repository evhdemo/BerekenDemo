import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { BerekenComponent } from './bereken.component';

describe('BerekenComponent', () => {
  let component: BerekenComponent;
  let fixture: ComponentFixture<BerekenComponent>;
  let resultaat: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerekenComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return sum of 12 and 34 = 46', () => {
    this.resultaat = component.berekenSom(12,34);
    expect(this.resultaat).toBe(46);
  });

  it('should return substraction of 12 and 34 = -22', () => {
    this.resultaat = component.berekenVerschil(12,34);
    expect(this.resultaat).toBe(-22);
  });

  it('should return multiplication of 10 and 20 = 200', () => {
    this.resultaat = component.berekenProduct(10,20);
    expect(this.resultaat).toBe(200);
  });

  it('should return division of 125 and 5 = 25', () => {
    this.resultaat = component.berekenQuotient(125,5);
    expect(this.resultaat).toBe(25);
  });

  it('should return array of getal 1 and 2 for all calculations', () => {
    var result : string[] = [];
    var getal1 : number = 1;
    var getal2 : number = 2;
    
    this.resultaat = component.bereken('som',getal1,getal2);
    result.push("som:" + this.resultaat);

    this.resultaat = component.bereken('verschil',getal1,getal2);
    result.push("verschil:" + this.resultaat);

    this.resultaat = component.bereken('product',getal1,getal2);
    result.push("product:" + this.resultaat);

    this.resultaat = component.bereken('quotient',getal1,getal2);
    result.push("quotient:" + this.resultaat);

    expect(result).toEqual(["som:3","verschil:-1","product:2","quotient:0.5"]);
  });


});
