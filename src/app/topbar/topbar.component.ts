import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Wine } from '../wine';
import {SelectItem} from 'primeng/api';
import { WineService } from '../wine.service';

/* interface ID {
  id: string;
  name: string;
  quantity: number;
	 total: number;
	 reserved: number;
	available: number;
} */

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})



export class TopbarComponent implements OnInit {
@Input() wines:Wine[];
 
  wineOptions:SelectItem[];
  items: MenuItem[];
  newWine:boolean;
  displayDialog: boolean;
  displayDialog2: boolean;
  wine:any;
  //wine:Wine= {name:'',id:'',total:0,available:0,quantity:0,reserved:0};
  //selectedId:ID= {name:'',id:'',total:0,available:0,quantity:0,reserved:0};

  constructor(private wineService:WineService) { }

  ngOnInit() {


      
      this.wineOptions= [
        {label: 'selectwine',value:null}];
        for (var i=0; i<this.wines.length; i++){
          this.wineOptions.push({ label:this.wines[i].name, value:this.wines[i]} );
        }
     
    //console.log(this.wineOptions[5].value.id);
    console.log(this.wines);
    
    this.items = 
      [
        {
            label: 'Actions',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-fw pi-tags',
                    command:() => { this.showDialogToAdd()}
                },
                {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  command:() => { this.showDialogToEdit()}
                },
                {
                  label: 'Delete', 
                  icon: 'pi pi-fw pi-trash',
                  command:() => { this.showDialogToEdit()}
                }
                ]
        }
    
      ];
  }


  showDialogToAdd() 
  {
    
    this.newWine = true;
    this.wine = {};
    this.displayDialog = true;
  }


  showDialogToEdit() 
  {
    this.wine={};
    this.newWine = false;
   this.displayDialog = true;
  }

  delete() 
  { if(!this.newWine)
    { 
      this.wineService.deleteWines(this.wine.id);
      for(var i=0; i<this.wines.length; i++)
       {
        if (this.wines[i].id==this.wine.id)
          { this.wines.splice(i,1);}
        if(this.wineOptions[i+1].value.id==this.wine.id)
          { this.wineOptions.splice(i+1,1); }
       }
    
    }
   this.wine = {};
  }


  save() 
  {
  console.log(this.wine)
  if(this.wine.length>0){
  if(this.newWine)
    {this.wines.push(this.wine);
      this.wineOptions.push({ label:this.wine.name, value:this.wine} );
      this.wineService.addWines(this.wine);
      console.log(this.newWine);
      this.wine={};
      console.log(this.wine);
      this.newWine=false;
    }
   else{
    this.wineService.editWine(this.wine)
    console.log(this.newWine);
   } }
   this.displayDialog = false;
  }
 
}
