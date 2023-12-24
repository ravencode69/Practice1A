import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { basichighlightDirective } from './basichighlight/basichighlight.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    basichighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
