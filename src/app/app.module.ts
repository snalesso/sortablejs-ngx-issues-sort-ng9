import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SortablejsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
