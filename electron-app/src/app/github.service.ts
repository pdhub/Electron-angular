import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GithubService {

  private clientId = '17dd694aa0866a60377c';
  private clientSecret = '5540b504788e8f9076e96c18af5b9ed555bb0360';
  private githubUsername = 'pdhub';
  reponame: any;
  responseData = new Subject();

  pulls : any;//{ "title" : "anytitle",         "author": "Pritom"}

  constructor(private http: Http) { }

  getPulls(){
    return this.http.get('https://api.github.com/repos/'+this.githubUsername+'/'+this.reponame+'/pulls').map(res=>res.json);
    //return this.pulls;
  }

  updateReponame(reponame : string)
  {
    this.reponame = reponame;
  }

}
