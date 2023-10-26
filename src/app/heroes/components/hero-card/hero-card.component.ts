import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../../../components/icon-button/icon-button.component';
import { AvatarComponent } from '../../../components/avatar/avatar.component';
import { ShortNumberPipe } from '../../../shared/pipes/short-number.pipe';
import { CardComponent } from '../../../components/card/card.component';
import { Hero } from '../../../shared';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-hero-card]',
  templateUrl: './hero-card.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IconButtonComponent,
    AvatarComponent,
    ShortNumberPipe,
    CardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCardComponent {
  @Input() hero!: Hero;
  @Input() hideButtons: boolean = false;
  @Output() deleteHero = new EventEmitter<Hero>();
  @Output() hireHero = new EventEmitter<Hero>();
  @Output() likeHero = new EventEmitter<Hero>();

  constructor() {}

  onHireHero() {
    this.hireHero.emit(this.hero);
  }

  onLikeHero() {
    this.likeHero.emit(this.hero);
  }

  onDeleteHero() {
    this.deleteHero.emit(this.hero);
  }
}
