import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyRoutingModule } from './spotify-routing.module';
import { SpotifyComponent } from './spotify.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    SpotifyComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SpotifyRoutingModule
  ]
})
export class SpotifyModule { }
