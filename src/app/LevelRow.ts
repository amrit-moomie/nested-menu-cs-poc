
export class LevelRow {
    public level: string;
    public label: string;
    public description: string;
    public childRows?: Array<LevelRow> = []; // we will use this to store childs in final list
}

// export class HierarrchyLevel extends String {
//     constructor(string: any) {
//         super(string);
//     }

//     public getLevel() {
//         return this.split('/').length - 2;
//     }
// }
// export class MenuRow {
//     public row: LevelRow;
//     public child: LevelRow[];

//     constructor(row: LevelRow) {
//         this.row = row;
//         this.child = [];
//     }
// }

// export class LevelRowList {
//     public rows: Array<LevelRow> = [];

//     public getAllChildRows(row: LevelRow): Array<LevelRow> {
//         return [];
//     }
// }

// export class LevelRowHelper {

// }