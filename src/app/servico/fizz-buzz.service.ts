import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
 
  constructor() { }

  gerar(limite: number): string[] {
    const fizzBuzz = [];
    for (let i = 0; i<limite; i++){
      if((i+1) % 3 ===0){
        fizzBuzz.push('Fizz');
      }
      else{
        fizzBuzz.push((i+1).toString());
      }    
    }
    return fizzBuzz;
  }
}
