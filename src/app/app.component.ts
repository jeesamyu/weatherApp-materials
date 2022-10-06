import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

constructor(){

}


ngOnInit() {

  this.optionfilter = this.inputbox.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '') )
  )
 
}

private _filter(value: any):string[] {
  const filtervalue = value.toLowerCase();
  return this.options.filter(option => option.toLowerCase().includes(filtervalue))
}
inputbox = new FormControl();

  options=['one','two','three']

optionfilter : Observable<string[]> | undefined;






hidbadge=false;
  matAutoCompleate:any;
  func(){
    this.hidbadge = !this.hidbadge
 }
 notification = 5;

 getvalue:any=0;

loaddata(){
 
var timer =setInterval( ()=>{
    this.getvalue+=10;
    console.log(this.getvalue);

    if(this.getvalue === 100){
      clearInterval(timer);
      console.log('data succesfully loaded !');
    }
    
  },2000 )

}

geticon:any='menu';

close:any= 'close';
menu:any='menu';

changeicon(){
 this.opennav = !this.opennav;
 if(this.opennav){
  return this.geticon = 'close';
 }else{
  return this.geticon = 'menu';
 }
}
PanalOpenState:any;
sidenav:any='';

push(){
this.sidenav = 'push';
}

over(){
  this.sidenav = 'over';
}

side(){
  this.sidenav = 'side';
}

opennav:any= 'closed'

step:any;

setStep(main : any){
  this.step = main;
}

nextStep(){
  this.step++;
}

prevStep(){
  this.step--;
}
invalue='';
}
