import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private router: Router, private cookies: CookieService) { }

  token: string = this.cookies.get("token");
  nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=S2RnsPCdMy60xccgdbtLmv256OSesj9YcwG3bVol&date=2021-09-02";

  ngOnInit(): void {
    this.token = this.cookies.get("token");
    if(!this.token) {
      this.router.navigate(['/account/login']);
    }
  }

}
