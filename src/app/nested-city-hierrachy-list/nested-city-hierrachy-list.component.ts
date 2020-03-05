import { Component, OnInit } from '@angular/core';
import { LevelRow } from '../LevelRow';

@Component({
  selector: 'app-nested-city-hierrachy-list',
  templateUrl: './nested-city-hierrachy-list.component.html',
  styleUrls: ['./nested-city-hierrachy-list.component.css']
})
export class NestedCityHierrachyListComponent implements OnInit {
  public sortedData: LevelRow[] = [];
  public data: LevelRow[] = [
    {
      label: 'Europe',
      description: 'Continent',
      level: '/1/',
    },
    {
      label: 'South America',
      description: 'Continent',
      level: '/2/',
    },
    {
      label: 'Asia',
      description: 'Continent',
      level: '/5/',
    },
    {
      label: 'Africa',
      description: 'Continent',
      level: '/4/',
    },
    {
      label: 'France',
      description: 'Country',
      level: '/1/1/',
    },
    {
      label: 'Paris',
      description: 'City',
      level: '/1/1/1/',
    },
    {
      label: 'Madrid',
      description: 'City',
      level: '/1/2/1/',
    },
    {
      label: 'Spain',
      description: 'Country',
      level: '/1/2/',
    },
    {
      label: 'Antarctica',
      description: 'Continent',
      level: '/3/',
    },
    {
      label: 'Brazil',
      description: 'Country',
      level: '/2/1/',
    },
    {
      label: 'Brasilia',
      description: 'City',
      level: '/2/1/1/',
    },
    {
      label: 'Bahia',
      description: 'State',
      level: '/2/1/2/',
    },
    {
      label: 'Salvador',
      description: 'City',
      level: '/2/1/2/1/',
    },
    {
      label: 'McMurdo Station',
      description: 'City',
      level: '/3/1/',
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(`data from server is : ${JSON.stringify(this.data)}`);
    this.setChildRows(this.data);
  }
  public setChildRows(sortedArray: LevelRow[]) {
    const rootarray: LevelRow[] = sortedArray.filter(row => (row.level.length - 2) === 1);
    console.log(JSON.stringify(rootarray));

    rootarray.forEach((row: LevelRow) => {
      row.childRows = this.getNextChildRows(row, sortedArray);
    });

    console.log(` results is ${ JSON.stringify(rootarray)}`);

    this.sortedData = rootarray;
  }
  public getNextChildRows(row: LevelRow, list: LevelRow[]): LevelRow[] {
    const result =  list.filter(i => i.level.length === row.level.length + 2  && i.level.indexOf(row.level) === 0);
    result.forEach(x => {
      x.childRows = this.getNextChildRows(x, list);
    });
    return result;
  }


  public getColumnArrays(data: LevelRow[]) {
    let result: any[][] = [];
    data.forEach(element => {
      console.log(`processing element : ${JSON.stringify(element)}`);
      const levelValues = element.level.split(`/`).filter(x => x.length > 0);
      console.log(`splitting elements ${levelValues}`);
      console.log(`element has level at ${levelValues.length}`);

      if (result[levelValues.length - 1] === undefined) {
        console.log('not defined...');
        result[levelValues.length - 1] = [];
      }
      console.dir(result[levelValues.length - 1].concat(element));
      result[levelValues.length - 1] = result[levelValues.length - 1].concat(element);
      //result.splice(levelValues.length - 1, 0, result[levelValues.length - 1].concat(element));
      console.log(`result now is ${JSON.stringify(result)}`);
    });
    console.log(`********************FINAL***********************`);

    console.dir(result);

    console.log(`********************NEXT***********************`);

    //this.getMenuRow(result);


  }


  //   public getMenuRow(columnRow: any[][]) {
  //     let rootLevelsCount: number = columnRow[0].length;
  //     let result : MenuRow[] = [];
  //     // let depth = 0;
  //     // columnRow[depth].forEach((element: any) => {
  //     //   console.log(`Root Menu Row: ${JSON.stringify(element)}`);
  //     //   result.unshift(columnRow.forEach())
  //     //   depth++;

  //     // });
  //     // columnRow[0].forEach((x: any)=> {
  //     //   result.push(new MenuRow(x));
  //     // });

  //     for (let index = 0; index < rootLevelsCount; index++) {
  //       const element = columnRow[index];
  //       console.log(`processing element in getMenyRow ${JSON.stringify(element)}`);

  //     }
  //     console.log(`********************FINAL LIST***********************`);  }
  //     // console.log(JSON.str);

  // }

 
}
