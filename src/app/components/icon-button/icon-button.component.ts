import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent implements OnInit {
  @Input() icon!: 'money' | 'like' | 'pencil' | 'trash';

  constructor() { }

  ngOnInit(): void {
  }

}
