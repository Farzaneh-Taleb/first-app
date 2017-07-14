
export class DataService {

  private data: string[] = [] ;
  addData(string: string) {
    this.data.push(string) ;
  }

  getData() {
    return this.data ;
  }
  constructor() { }

}
