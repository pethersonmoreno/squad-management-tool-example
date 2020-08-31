import { v4 as uuid } from 'uuid';

export type TeamType = 'Fantasy' | 'Real';

export class Team{
  public readonly id: string;
  public name: string;
  public description?: string;
  public website?: string;
  public type: TeamType;
  
  constructor(props: Omit<Team, 'id'>, id?: string){
    // Object.assign(this, props);
    this.name = props.name;
    this.description = props.description;
    this.website = props.website;
    this.type = props.type;
    if(!id){
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
