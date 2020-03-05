import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nested-city-hierrachy-list",
  templateUrl: "./nested-city-hierrachy-list.component.html",
  styleUrls: ["./nested-city-hierrachy-list.component.css"]
})
export class NestedCityHierrachyListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public data: {
    data: [
      {
        label: "Locations";
        sort: 0;
        level: 0;
      },
      {
        label: "Europe";
        description: "Continent";
        level: "/1/";
      },
      {
        label: "South America";
        description: "Continent";
        level: "/2/";
      },
      {
        label: "France";
        description: "Country";
        level: "/1/1/";
      },
      {
        label: "Paris";
        description: "City";
        level: "/1/1/1/";
      },
      {
        label: "Madrid";
        description: "City";
        level: "/1/2/1/";
      },
      {
        label: "Spain";
        description: "Country";
        level: "/1/2/";
      },
      {
        label: "Spain";
        description: "Country";
        level: "/1/2/";
      },
      {
        label: "Antarctica";
        description: "Continent";
        level: "/3/";
      },
      {
        label: "Brazil";
        description: "Country";
        level: "/2/1/";
      },
      {
        label: "Brasilia";
        description: "City";
        level: "/2/1/1/";
      },
      {
        label: "Bahia";
        description: "State";
        level: "/2/1/2/";
      },
      {
        label: "Salvador";
        description: "City";
        level: "/2/1/2/1/";
      },
      {
        label: "McMurdo Station";
        description: "City";
        level: "/3/1/";
      }
    ];
  };
}
