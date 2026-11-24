import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // NEW: the sheet's links stay on the sheet

@Component({
  selector: 'lc-component-sheet',
  imports: [RouterLink], // CHANGED: was []
  templateUrl: './component-sheet.html',
  styleUrl: './component-sheet.scss',
})
export class ComponentSheet {}
