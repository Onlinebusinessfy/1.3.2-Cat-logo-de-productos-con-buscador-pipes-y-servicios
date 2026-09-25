import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductosService } from './productos.service';
import { DisponibilidadPipe } from './disponibilidad.pipe';

@Component({
  selector: 'app-root',
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    DisponibilidadPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private productosService = inject(ProductosService);

  productos = this.productosService.getProductos();

  busqueda = signal('');

  productosFiltrados = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();

    if (!texto) {
      return this.productos;
    }

    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto)
    );
  });

  actualizarBusqueda(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.busqueda.set(input.value);
  }

}