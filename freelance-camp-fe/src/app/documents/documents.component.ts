import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My 1 Doc",
      description: "Doc 1 description",
      file_url: "http://example.com",
      updated_at: "6/6/2017",
      image_url: "http://example.com/doc1.png"
    },
    {
      title: "My 2 Doc",
      description: "Doc 2 description",
      file_url: "http://example.com",
      updated_at: "5/6/2017",
      image_url: "http://example.com/doc3.png"
    },
    {
      title: "My 3 Doc",
      description: "Doc 3 description",
      file_url: "http://example.com",
      updated_at: "6/7/2017",
      image_url: "http://example.com/doc3.png"
    }
  ]
}
