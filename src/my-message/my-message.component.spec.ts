/* ts-lint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMessageComponent } from './my-message.component';

describe('MyMessageComponent', () => {
    let component: MyMessageComponent;
    let fixture: ComponentFixture<MyMessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MyMessageComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyMessageComponent);
        component = fixture.componentInstance;
    });

    it('should create the my-message', () => {
        expect(component).toBeTruthy();
    });
});
