import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

  token: string = this.cookies.get("token");
  nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=S2RnsPCdMy60xccgdbtLmv256OSesj9YcwG3bVol&date=";
  pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

  imgs:Array<Object> = [];
  imgSources:Array<String> = [];
  imgTitles:Array<String> = [];
  imgExplanations:Array<String> = [];
  imgCopyrights:Array<String> = [];

  pokemonList: Array<any> = [];
  selectedPokemonImage: String = "https://cdn.static.barracks.gg/BUILD/brk-logo-red.svg"; // Just a random default image
  selectedPokemonName: String = "Pokemon";

  slideIndex = 1;

  ngOnInit(): void {
    this.token = this.cookies.get("token");
    if(!this.token) {
      this.router.navigate(['/account/login']);
    }
    
    
    var date = new Date();
    for(var i = 1; i <= 3; i++) {
      this.http.get<any>(this.nasaUrl + date.toISOString().split('T')[0]).subscribe(data => {
        this.imgs.push(data);
        this.imgSources.push(data["url"]);
        this.imgTitles.push(data["title"] + " / " + data["date"]);
        this.imgExplanations.push(data["explanation"].substring(0,50));
        this.imgCopyrights.push(data["copyright"]);
        this.showSlides(1);
      });
      date.setDate(date.getDate() - 1);
    }
    
    for(var i = 1; i <= 3; i++) {
      this.http.get<any>(this.pokemonUrl).subscribe(data => {
        this.pokemonList = data["results"];
      });
      date.setDate(date.getDate() - 1);
    }
    
  }

  activateTab(tabName:string) {
    var tabIndicators = document.getElementsByClassName("tab");
    var tabs = document.getElementsByClassName("tab-content");
    for(var i = 0; i < tabs.length; i++) {
      tabIndicators[i].classList.remove("active-tab");
      tabs[i].classList.add("invisible");
      if(tabIndicators[i].id == tabName) {
        tabIndicators[i].classList.add("active-tab");
      }
      if(tabs[i].id == tabName + "-content") {
        tabs[i].classList.remove("invisible");
      }

    }
  }

  updatePokeData(pokemon:any) : void {
    this.http.get<any>(pokemon["url"]).subscribe(data => {
      this.selectedPokemonName = pokemon["name"];
      this.selectedPokemonImage = data["sprites"]["front_default"];
    });
    
  }

  plusSlides(n:number) {
    this.showSlides(this.slideIndex += n);
  }
  
  // Thumbnail image controls
  currentSlide(n:number) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n:number) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("invisible");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[this.slideIndex-1].classList.remove("invisible");
    dots[this.slideIndex-1].classList.add("active");
  }

  exit(): void {
    this.cookies.delete("token", "/");
    
    this.router.navigate(['/account/login']);
  }
}
