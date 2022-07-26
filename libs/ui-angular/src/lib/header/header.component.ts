import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ecommerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  title!: string;

  @Input()
  color!: string;

  @Input()
  logoUrl!: string;

  @Input()
  cartIconUrl!: string;

  @Input()
  totalProductsInCart!: number;

  @Output() cartClick: EventEmitter<boolean> = new EventEmitter();

  onOpenCart(): void {
    this.cartClick.emit(true);
  }
}
