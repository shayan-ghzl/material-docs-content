import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {GrlFileInputModule} from 'ng-gorilla/file-input';

/**
 * @title Basic File Input
 */
@Component({
  selector: 'file-input-overview-example',
  styleUrls: ['file-input-overview-example.css'],
  templateUrl: 'file-input-overview-example.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, GrlFileInputModule],
})
export class FileInputOverviewExample {}
