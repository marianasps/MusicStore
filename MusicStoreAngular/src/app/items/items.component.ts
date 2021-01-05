import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  //instr: Instrument;

  constructor(private itemService: ItemService, private instrService: InstrumentService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      items => {
        /*
        // isto nao resultou
        // tslint:disable-next-line:label-position
        for (const entry of items) {
          entry.instrument_object = this.instrService.getInstrument(entry.instrument);
          this.items.push();
        }

        */
        this.items = items;

      }
    );
  }

}
