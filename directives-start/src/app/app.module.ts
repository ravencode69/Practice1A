import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { basichighlightDirective } from './basichighlight/basichighlight.directive';

import { AppComponent } from './app.component';
import { BetterhighlightDirective } from './betterhighlight/betterhighlight.directive';
import { IfnotDirective } from './ifnot.directive';

@NgModule({
  declarations: [
    AppComponent,
    basichighlightDirective,
    BetterhighlightDirective,
    IfnotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
