import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WineService } from '../wine.service';
import { Wine } from '../wine';




@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class HomecompComponent implements OnInit 
{
  constructor(private wineService:WineService) { }
  wines:Wine[];
  cols:any[];
  response:any;
  resp:any;
  newWine:boolean;
  wine:any;
  displayDialog: boolean;
  selectedWine:Wine;
  id:any;
  

  ngOnInit() 
  {
    this.getAllWines();
      this.cols = [
          { field: 'id', header: 'id' },
          { field: 'name', header: 'name' },
          { field: 'quantity', header: 'quantity' },
          { field: 'total', header: 'total' },
          { field: 'reserved', header: 'reserved' },
          { field: 'available', header: 'available' }
      ];

      
  }



getAllWines()
   {
    this.wineService.getWines()
    .subscribe((response:Wine[]) => {
      this.wines=response;
      //console.log(this.wines);
    })
   }


showDialogToAdd() 
  {
    this.newWine = true;
    this.wine = {};
    this.displayDialog = true;
  }


delete() 
  {
    let index = this.wines.indexOf(this.selectedWine);
    this.wines = this.wines.filter((val, i) => i != index);
    this.wineService.deleteWines(this.selectedWine.id)
    this.wine = null;
    this.displayDialog = false;
  }


  deletewine(wine:Wine)
  {
   this.selectedWine=wine;
    this.delete();
  }



  showDialogToEdit(wine:Wine) 
  {
   this.wine =wine;
   this.selectedWine=wine;
   this.displayDialog = true;
  }


save() 
  {
    let wines = [...this.wines];
    if (this.newWine)
       { wines.push(this.wine);
        this.wineService.addWines(this.wine)}
    else
        {wines[this.wines.indexOf(this.selectedWine)] = this.wine;
        this.wineService.editWine(this.wine)}
    this.wines = wines;
    this.wine = null;
    this.displayDialog = false;
  }



onRowSelect(event) 
  {
    this.newWine = false;
    //this.wine = this.cloneWine(event.data);
    this.wine=event.data;
    this.displayDialog = true;
  }


/* cloneWine(c: Wine) 
  {
    let wine = {};
    for (let prop in c) {
        wine[prop] = c[prop];
    }
    return wine;
  } */


}
