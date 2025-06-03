import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservas } from '../reservas.model';
import { ReservasService } from '../reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  reserva: Reservas = {
    id: '',
    nome: '',
    dataRes: new Date(),
    numMesa: 1,
    telefone: 0,
  };

  constructor(
    private reservaService: ReservasService,
    private router: Router
  ) {}

  salvar() {
    this.reservaService.cadastrarReservas(this.reserva).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }
}
