import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../reservas.service';
import { Reservas } from '../reservas.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemComponent implements OnInit {
  reservas: Reservas[] = [];

  constructor(private reservasService: ReservasService) {}

  ngOnInit(): void {
    this.carregarReservas();
  }

  carregarReservas(): void {
    this.reservasService.listarReservas().subscribe((res) => {
      this.reservas = res;
    })
  }
}
