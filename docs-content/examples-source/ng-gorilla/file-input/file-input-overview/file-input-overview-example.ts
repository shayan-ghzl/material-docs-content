import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

/**
 * @title Basic File Input
 */
@Component({
  selector: 'file-input-overview-example',
  styleUrls: ['file-input-overview-example.css'],
  templateUrl: 'file-input-overview-example.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class FileInputOverviewExample {}
