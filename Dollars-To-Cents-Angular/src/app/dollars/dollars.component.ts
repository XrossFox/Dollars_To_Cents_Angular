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

    let tmp: number = Math.trunc(this.dollars * 100);

    while(!(tmp <= 0)){  

      // if the amount of tmp is divisible by 25, 10 or 5, then a 
      // coin of that value is added and they are removed from the current tally
      // if no coin is divisible, then you only have pennies
      
      if(tmp >= 25){
        this.interchng.quarters++;
        tmp -= 25;
        continue;
      }
      if(tmp >= 10){
        this.interchng.dimes++;
        tmp -= 10;
        continue;
      }
      if(tmp >= 5){
        this.interchng.nickels++;
        tmp -= 5;
        continue;
      }
      this.interchng.pennies += tmp;
      tmp -= tmp;
      
    }

  }

}
