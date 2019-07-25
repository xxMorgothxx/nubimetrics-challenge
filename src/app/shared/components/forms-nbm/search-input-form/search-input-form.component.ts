import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'nubimetrics-search-input-form',
  templateUrl: './search-input-form.component.html'
})
export class SearchInputFormComponent {

  @Input() placeholder: string = 'Ingrese el elemento a buscar...';
  @Output('text') textEmit = new EventEmitter<string>();

  /**
   * Emite al componente padre el texto ingresado por el usuario
   * @param text Texto ingresado
   */
  emitText(text: string) {
    this.textEmit.emit(text);
  }

}
