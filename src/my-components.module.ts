import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMessageComponent } from './my-message/my-message.component';
@NgModule({
    declarations: [
        MyMessageComponent,
    ],
    exports: [
        MyMessageComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class MyComponentsModule {
    static forRoot() {
        return {
            ngModule: MyComponentsModule,
            providers: []
        };
    }
}
