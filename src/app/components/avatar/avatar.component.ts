import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Hero } from "../../shared";

@Component({
  selector: 'app-avatar',
  template: `
    <img
      class="w-24 h-24 rounded-full shadow-md border border-gray-300"
      src="{{ hero.avatarUrl || '/assets/images/empty-avatar.webp' }}"
      alt="{{ hero.name }}"
    />
  `,
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent  {
  @Input() hero!: Hero;
  @Input() class?: string;

  constructor() {}

}
