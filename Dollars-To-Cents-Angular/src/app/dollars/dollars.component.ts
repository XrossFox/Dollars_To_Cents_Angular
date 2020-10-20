import { Component, OnInit, Input } from '@angular/core';
import { InterchangeService } from '../interchange.service';

@Component({
  selector: 'app-dollars',
  templateUrl: './dollars.component.html',
  styleUrls: ['./dollars.component.css']
})
export class DollarsComponent implements OnInit {

  
  public headerText : string = "Please insert your dollars";
  @Input() dollars : number;

  constructor(private interchng: InterchangeService) { }

  ngOnInit(): void {
  }

  /**
   * called by the button under the input tag. Converts the dollars to coins
   */
  public toCoins(): void{

    this.interchng.dimes = 0;
    this.interchng.nickels = 0;
    this.interchng.pennies = 0;
    this.interchng.quarters = 0;

    let coins: number;
    coins = this.dollars * 100;
  
    while(coins != 0){  

      // if the amount of coins is divisible by 25, 10 or 5, then a 
      // coin of that value is added and they are removed from the current tally
      // if no coin is divisible, then you only have dimes.

      if(coins % 25 == 0){
        this.interchng.quarters++;
        coins -= 25;
        continue;
      }
      if(coins % 10 == 0){
        this.interchng.dimes++;
        coins -= 10;
        continue;
      }
      if(coins % 5 == 0){
        this.interchng.nickels++;
        coins -= 10;
        continue;
      }
      this.interchng.pennies += coins;
      coins -= coins;

    }

  }

}
