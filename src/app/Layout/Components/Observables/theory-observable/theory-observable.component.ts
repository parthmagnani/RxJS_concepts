import { Component } from '@angular/core';
import { Observable, concatAll, filter, map, mergeAll, switchAll } from 'rxjs';

@Component({
  selector: 'app-theory-observable',
  templateUrl: './theory-observable.component.html',
  styleUrls: ['./theory-observable.component.scss']
})
export class TheoryObservableComponent {

  testing: any

  constructor(){

  }

  ngOnInit(){
    console.log("ng on init called")

  }

  onservableDefination(){
    return new Observable((subscriber: any) => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      subscriber.next(4)
      subscriber.next(5)
      subscriber.next(6)
      subscriber.next(7)
      subscriber.next(8)
      subscriber.next(9)
      subscriber.next(10)
    })
  }

  subscribeObservable(){
    console.log('before observable')
    const checking = this.onservableDefination()

    checking.subscribe(results => console.log(results))

    checking.subscribe({
      next: (result: any) => {
        console.log(result); // Handle next values emitted by the observable
      },
      error: (error: any) => {
        console.error(error); // Handle errors emitted by the observable
      },
      complete: () => {
        console.log('Observable completed'); // Handle the completion of the observable
      }
    });
    console.log("after observable")
  }

  oneMoreSubscribeObservable(){
    const checking2 = this.onservableDefination()
    checking2.subscribe(results => console.log("second time subscribing",results))
  }



  forOperators(){
    const instanceOfObservable = this.onservableDefination()

    const newInstanceWhenUsingPipeOperator = instanceOfObservable.pipe(filter((num: any) => num % 2 == 0), map(evenNumber => evenNumber*evenNumber))
    console.log(newInstanceWhenUsingPipeOperator)

    newInstanceWhenUsingPipeOperator.subscribe((resultOfNewInstance) => console.log(resultOfNewInstance))
    // pipe operator
    // observableInstance.pipe(operator)  or observableInstance.pipe(operatorFactory())

  }

  checkingHigherOrderObservable(){
    return new Observable((subscribe) => {
      // subscribe.next(10)


      setTimeout(() => {
        subscribe.next(20)
      }, 2000);
      setTimeout(() => {
        subscribe.next(30)
      }, 3000);
      setTimeout(() => {
        subscribe.next(40)
      }, 4000);
      setTimeout(() => {
        subscribe.next(50)
      }, 5000);
    })
  }

  callingHigherOrderObservableMethod(){
    const values = this.checkingHigherOrderObservable()

    const newvalues = values.pipe(map((val: any) => {
      console.log(val)
      return new Observable(subscribe => {
        setTimeout(() => {
          subscribe.next(val*2)
        }, 2000);
        setTimeout(() => {
          subscribe.next(val*4)
        }, 3000);
      })
    }))
    // newvalues.pipe(concatAll()).subscribe(result => console.log("Squared value by concatAll:", result));

    // newvalues.pipe(mergeAll()).subscribe(result => console.log("Squared value by mergeAll:", result));

    newvalues.pipe(switchAll()).subscribe(result => console.log("Squared value:", result));
    
    
  }

}
