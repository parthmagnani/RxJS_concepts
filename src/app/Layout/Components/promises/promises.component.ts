import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent {

  generatedValueByPromise: any = null

  promiseExample(){
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
      if(randomNumber <= 5){
        setTimeout(() => {
          this.generatedValueByPromise = randomNumber
          resolve(this.generatedValueByPromise )
        }, randomNumber*1000);
      }else{
        setTimeout(() => {
          this.generatedValueByPromise = randomNumber
          reject(this.generatedValueByPromise)
        }, 1000);
      }
    })
    

  }
}
