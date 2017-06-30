import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentsService } from './documents.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  mode = "Observable";

  constructor(
    private documentsService: DocumentsService;
  ) {}
}
