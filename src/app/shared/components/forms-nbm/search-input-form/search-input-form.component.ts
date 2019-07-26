import { Component, Output, EventEmitter, Input, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'nubimetrics-search-input-form',
  templateUrl: './search-input-form.component.html'
})
export class SearchInputFormComponent implements OnInit {

  @ViewChild('product', { static: true }) text: ElementRef;
  @Input() placeholder: string = 'Ingrese el elemento a buscar...';
  @Output('text') textEmit = new EventEmitter<string>();

  ngOnInit() {
    this.text.nativeElement.value = sessionStorage.getItem('last_text');
  }

  /**
   * Emite al componente padre el texto ingresado por el usuario
   * @param text Texto ingresado
   */
  emitText(text: string) {
    sessionStorage.setItem('last_text', text);
    this.textEmit.emit(text);
  }

}
