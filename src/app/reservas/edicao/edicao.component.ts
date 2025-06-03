import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservasService } from '../reservas.service';
import { Reservas } from '../reservas.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoComponent implements OnInit {
  reserva: Reservas = {
    id: '',
    nome: '',
    numMesa: 0,
    dataRes: new Date(),
    telefone: 0,
  };
  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservaService: ReservasService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarReserva();
  }

  carregarReserva(): void {
    if (!this.id) {
      this.router.navigate(['/listagem']);
      return;
    }

    this.reservaService.buscarReservas(this.id).subscribe((a) => {
      this.reserva = a;
    });
  }

  salvar(): void {
    if (!this.reserva) return;
    //this.reserva.dataRes = this.reserva.dataRes.toISOString();
    this.reservaService
      .atualizarReservas(this.id, this.reserva)
      .subscribe(() => {
        this.router.navigate(['/listagem']);
      });
  }
}
