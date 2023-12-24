import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { basichighlightDirective } from './basichighlight/basichighlight.directive';

import { AppComponent } from './app.component';
import { BetterhighlightDirective } from './betterhighlight/betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basichighlightDirective,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
