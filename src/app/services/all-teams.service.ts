import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AllTeamsService {
  
  constructor(protected http: HttpClient, private Cookie: CookieService) { }

  getTeams() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  getOneTeam(id){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='.concat(id));
  }

  getPlayersTeam(id){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id='.concat(id));
  }

  getPlayer(player){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id='.concat(player));
  }

  getOneEvent(id){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id='.concat(id));
  }

  get5NextEvents(id){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id='.concat(id));
  }

  get5LastEvents(id){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id='.concat(id));
  }
  
  getTable(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920')
  }

  getAllEvents(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920');
  }

}
