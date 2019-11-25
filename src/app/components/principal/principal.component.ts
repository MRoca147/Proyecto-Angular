import { Component, OnInit } from '@angular/core';
import { AllTeamsService } from 'src/app/services/all-teams.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  cookieValue: any[] = [];
  teams: any[] = [];

  constructor(protected AllTeamsService: AllTeamsService, private Cookie: CookieService) { }

  ngOnInit() {
    this.AllTeamsService.getTeams()
    .subscribe(
      (data) => { // Success
        this.teams = data['teams'];
      },
      (error) => {
        console.error(error);
      }
    );


  }

  setFavorite(team){
    this.cookieValue.push(team);
    this.setCookie(this.cookieValue);
  }

  setCookie(cookie){
    this.Cookie.set('favorite', cookie);
    console.log(this.Cookie.get('favorite'))
  }

}
