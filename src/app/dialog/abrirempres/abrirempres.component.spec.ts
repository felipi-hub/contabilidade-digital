import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirempresComponent } from './abrirempres.component';

describe('AbrirempresComponent', () => {
  let component: AbrirempresComponent;
  let fixture: ComponentFixture<AbrirempresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirempresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirempresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
