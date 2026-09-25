import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponibilidad',
  standalone: true
})
export class DisponibilidadPipe implements PipeTransform {

  transform(existencias: number): string {
    return existencias > 0 ? 'Disponible' : 'Agotado';
  }

}