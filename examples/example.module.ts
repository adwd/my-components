import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { MyComponentsModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        MyComponentsModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
