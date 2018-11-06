import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Wine } from '../wine';

interface ID {
  label: string;
  value: string;
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})



export class TopbarComponent implements OnInit {
@Input() wines:Wine[];
 
 // itemIds:SelectItem[];
  itemIds:ID[]=[];
  items: MenuItem[];
  wine:any;
  newWine:boolean;
  displayDialog: boolean;
  displayDialog2: boolean;
  selectedId:ID={label:'',value:''};

  constructor() { }

  ngOnInit() {
        for (var i=0; i<this.wines.length; i++) {
      this.itemIds.push({ label:this.wines[i].id, value:this.wines[i].id} );
      //console.log(this.itemIds[i]); 
    } 
    
    if (this.selectedId!=null){
      console.log(this.selectedId)
    }
    console.log(this.itemIds);
    //console.log(this.wines);
    console.log(this.selectedId)
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
    console.log(this.selectedId)
    this.wine = {};
    for (var i=0; i<this.wines.length; i++) {
      if (this.wines[i].id == this.selectedId.label)
      {this.wine= this.wines[i]}
     // console.log(this.itemIds[i]); 
    }  
   //this.wine =wine;
   //this.selectedWine=wine;
   
   this.displayDialog2 = true;
  }

  delete() 
  {
   // let index = this.wines.indexOf(this.selectedWine);
    //this.wines = this.wines.filter((val, i) => i != index);
   // this.wineService.deleteWines(this.selectedWine.id)
   this.wine = {}; 
   this.wine = null;
    this.displayDialog2 = true;
  }
 
}
