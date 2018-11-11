import { inject } from '@angular/core/testing';

import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  modal: boolean
  searchText : String;
   tab = [
     {
       name : "Zone de remontées glaiseuses",
       demande : "11/06/2018",
       proposition  :"",
       reception : "",
       validation : "", 
       test : true,
     },
     {
       name : "PDR Initialisé par le trace",
       demande : "11/06/2018",
       proposition  :"11/06/2018",
       reception : "11/06/2018",
       validation : "", 
       test : true,
     },
  
     {
       name : "Sondages",
       demande : "11/06/2018",
       proposition  :"11/06/2018",
       reception : "11/06/2018",
       validation : "", 
       test : true,
     },
     {
       name : "Liste des QA",
       demande : "11/06/2018",
       proposition  :"",
       reception : "",
       validation : "", 
       test : true,
     },
     {
       name : "Changement des QA(IN2915)",
       demande : "11/06/2018",
       proposition  :"11/06/2018",
       reception : "11/06/2018",
       validation : "11/06/2018", 
       test : true,
     },
     {
       name : "Schéma de signalisation",
       demande : "11/06/2018",
       proposition  :"",
       reception : "",
       validation : "", 
       test : true,
     },
     {
       name : "Ancien carnet de courbe",
       demande : "",
       proposition  :"",
       reception : "",
       validation : "", 
       test : true,
     },
     {
       name : "chainage",
       demande : "11/06/2018",
       proposition  :"11/06/2018",
       reception : "11/06/2018",
       validation : "", 
       test : true,
     }
   ]  
   item = {
   name :"",
   demande :"",
   proposition : "",
   reception :"",
   validation : "",
   test : true,
  }
   constructor() { }
 
   ngOnInit() {
     this.modal = true
   
   }
 
   delete(name){
     for(let i = 0; i < this.tab.length; ++i){
         if (this.tab[i].name === name) {
             this.tab.splice(i,1);
         }
     }
 }

 add(name,demande,proposition,reception,validation){

  this.item.name = name; 
  this.item.demande = demande;
  this.item.proposition = proposition;
  this.item.reception = reception;
  this.item.validation = validation;
  this.item.test = true,
  this.tab.push(this.item);
 }
 
 }
