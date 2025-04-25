import { Component } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AbrirempresComponent } from '../../dialog/abrirempres/abrirempres.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DialogModule, AbrirempresComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dialog: Dialog) { }

  openDialog(): void {
    this.dialog.open(AbrirempresComponent); // ✅ Abre o modal corretamente


  }

}
