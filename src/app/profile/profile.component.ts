import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  email: string

  constructor(
    private authService: MsalService
  ) { }

  ngOnInit() {    
    const account = this.authService.instance.getActiveAccount()
    this.email = account.username
  }
}
