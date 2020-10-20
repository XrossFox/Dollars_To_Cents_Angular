import { Component, OnInit, Input } from '@angular/core';
import { InterchangeService } from '../interchange.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(private interchng: InterchangeService) { }

  getQuarters(): number{
    return this.interchng.quarters;
  }

  getDimes(): number{
    return this.interchng.dimes;
  }
  
  getNickels(): number{
    return this.interchng.nickels;
  }

  getPennies(): number{
    return this.interchng.pennies;
  }

  ngOnInit(): void {
  }

}
