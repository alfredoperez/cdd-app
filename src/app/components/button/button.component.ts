import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  @Input() type: 'primary' | 'secondary' | 'danger' | 'outline' = 'primary';
  @Input() expand: 'inline-block' | 'full' = 'inline-block';
  @Input() focus?: boolean;
  @Input() label?: string;
  @ViewChild('button') button!: ElementRef;

  constructor() {}

  getStyles() {
    let styles =
      'items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none';
    switch (this.type) {
      case 'primary':
        styles +=
          ' text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300';
        break;
      case 'secondary':
        styles +=
          ' text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300';
        break;
      case 'danger':
        styles += ' text-white bg-red-600 hover:bg-red-700 focus:ring-red-300';
        break;
      case 'outline':
        styles +=
          ' text-gray-800 bg-gray-200/10 hover:bg-gray-200/75 focus:ring-gray-300 border border-gray-300';
    }
    if (this.expand === 'full') {
      styles += ' w-full';
    }
    return styles;
  }

  ngAfterViewInit(): void {
    if (this.focus) {
      this.button.nativeElement.focus();
    }
  }
}
