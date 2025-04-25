import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { title: 'Consultoria Contábil', description: 'Consultoria especializada para empresas.' },
    { title: 'Planejamento Fiscal', description: 'Otimização da carga tributária.' },
    { title: 'Gestão de Folha de Pagamento', description: 'Gerenciamento da folha de pagamento.' }
  ];

}
