import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { LevelRow } from '../LevelRow';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'cs-menu-item',
  templateUrl: './cs-menu-item.html',
  styleUrls: ['./cs-menu-item.css']
})
export class MenuItemComponent implements OnInit, AfterViewInit {
  @Input() rows: LevelRow[];

  // @ViewChild('childMenu') childMenu: MatMenu;
  // @ViewChildren(MatMenu) childrenComponent: QueryList<MatMenu>;
  @ViewChild('childMenu', {static: true}) public childMenu: MatMenu;

  // public childMenu: MatMenu;

  ngOnInit(): void {
    console.dir(this.childMenu);
   // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    // console.log(`ngAfterViewInit`);
    // console.dir(this.childMenu);

    // // console.dir(this.childMenu);
    // this.childrenComponent.changes.subscribe((comps: QueryList<MatMenu>) =>
    // {
    //   // Now you can access the child component
    //   // console.dir(comps);
    //   this.childMenu = comps.first;
      console.dir(this.childMenu);

    // });
  }
}
