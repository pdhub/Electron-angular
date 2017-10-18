import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  username : any;
  pulls : any;
  constructor(private gitHubService : GithubService) { 
  }

  search() {
    this.gitHubService.updateReponame(this.username);
    this.gitHubService.getPulls()
    .subscribe(pulls=>{
      console.log(pulls);
      this.pulls = pulls
    });
  }

  ngOnInit() {
  }

}
