import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FontAwesomeModule, CoreModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, EventCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faArrowRight);
  }
}
