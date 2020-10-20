import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterchangeService {

  quarters: number;
  dimes: number;
  nickels: number;
  pennies: number;

  constructor() { }
}
