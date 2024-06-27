import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCitasMedicasComponent } from './registro-citas-medicas.component';

describe('RegistroCitasMedicasComponent', () => {
  let component: RegistroCitasMedicasComponent;
  let fixture: ComponentFixture<RegistroCitasMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCitasMedicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroCitasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
