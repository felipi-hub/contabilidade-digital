import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abrirempres',
  standalone: true,
  imports: [],
  templateUrl: './abrirempres.component.html',
  styleUrl: './abrirempres.component.css'
})
export class AbrirempresComponent {
  constructor(public dialogRef: DialogRef) { }

  close(): void {
    this.dialogRef.close();

  }

}


