import { Component } from '@angular/core';




export interface movie {
  id: number;
  name: string;
  releasedate : number;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'learnangularwithteddy';


  movies:movie[]=[
    {
      id :1,
      name:"spider",
      releasedate:2018,
      

    },
    {
      id :2,
      name:"wj3 trab",
      releasedate:2001,
      

    },

  ];

moviename:string="";
mytitle:String;
desc:String;
img :String;
favlanguage:String

isVisible : boolean=true;


handlechange(event:any){
  this.moviename=event.target.value

}
  
toggleVisibility() {
  this.isVisible = !this.isVisible;
}



   constructor(){

    this.mytitle="learnAngular"
    this.desc="learn angular with practice"
    this.img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png"
    
   this.favlanguage="java"
   }



   logValue(value: string) {
    console.log(value);



  
  }

}
