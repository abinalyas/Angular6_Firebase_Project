export class Photo {
  $key: string;

  file:File;
  title:string;
  name:string;
  url:string;
  progress:number;

  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}
