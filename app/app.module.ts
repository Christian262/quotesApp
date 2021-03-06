import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateComponent } from './create/create.component';
import { OrderbyPipe} from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
