import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-contrasena',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,ReactiveFormsModule],
  templateUrl: './input-contrasena.html',
  styleUrl: './input-contrasena.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputContrasena {
  @Input() control!:FormControl;
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
