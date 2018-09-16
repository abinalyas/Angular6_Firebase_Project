
export class Upload {

  $key: string;

  file:File;
  title:string;
  descr:string;
  name:string;
  url:string;
  progress:number;

  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}
