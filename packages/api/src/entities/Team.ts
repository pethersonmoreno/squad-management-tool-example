import { uuid } from 'uuidv4';

export class Team{
  public readonly id: string;
  public name: string;
  public description?: string;
  
  constructor(props: Omit<Team, 'id'>, id?: string){
    // Object.assign(this, props);
    this.name = props.name;
    this.description = props.description;
    if(!id){
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
