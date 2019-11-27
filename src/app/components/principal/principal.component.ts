import { Component, OnInit } from '@angular/core';
import { AllTeamsService } from 'src/app/services/all-teams.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  teams: any[] = [];
  favorites: any[] = [];
  favArray: any[] =[];

  constructor(protected AllTeamsService: AllTeamsService) { }

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

    this.getFavorite();

  }

  getFavorite(){
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  setFavorite(team){
    if(localStorage.getItem('favorites')){
      if(this.searchFavorite(team) == true){
        alert('El equipo ya está en favorito');
      }else{
        var nFav = JSON.parse(localStorage.getItem('favorites'));
        nFav.push(team);
        localStorage.setItem('favorites', JSON.stringify(nFav));
      }
    }else{
        this.favArray.push(team);
        localStorage.setItem('favorites', JSON.stringify(this.favArray));
    }
  }

  deleteFavorite(team){
    var favs = JSON.parse(localStorage.getItem('favorites'));
    var i=0;
    favs.forEach(element => {
      if(element.idTeam == team.idTeam){
        var idx = favs.indexOf(element);
        favs.splice(idx, 1);
      }
      i++
    });
    localStorage.setItem('favorites', JSON.stringify(favs));
  }

  searchFavorite(team){
    if(localStorage.getItem('favorites')){
      var array = JSON.parse(localStorage.getItem('favorites'))
      var repeat = false;
      array.forEach(element => {
        if(element.idTeam == team.idTeam){
          repeat = true;
          return repeat;
        }
      });
      return repeat;
    }else{
      return false;
    }
  }

}
