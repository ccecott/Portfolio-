import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  // pdfSrc = "/Users/ccecott/Desktop/portfolio/src/assets/Cecott_ Resume_MI (1).pdf";

  ngOnInit(): void {
  }

}
