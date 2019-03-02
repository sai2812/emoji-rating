import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { EmojiRatingComponent } from './emoji-rating/emoji-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    EmojiRatingComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RatingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
