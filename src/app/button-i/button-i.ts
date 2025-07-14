import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-i',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './button-i.html',
  styleUrl: './button-i.css'
})
export class ButtonI {
  
}
