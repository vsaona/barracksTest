import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }
  token = ""
  loginRequestBody = {
    "mail": "testdeveloper@barracks.gg",
    "password": "testdeveloper"
  };

  login(): void {
    this.http.post<any>('https://beta-api.barracks.gg/v2/Auth/Authenticate', {
      "mail": "testdeveloper@barracks.gg",
      "password": "testdeveloper"
    }, {observe: "response"}).subscribe(data => {
      if(data.status == 200) {
        this.cookies.set("token", data.body.token, 0, "/");
        this.router.navigate(['/account/data']);
      } else {
        alert("¡Ha ingresado mal su usuario y contraseña!\n Código de error: " + data.status);
      }
    });
  }

  ngOnInit(): void {
  }

}
