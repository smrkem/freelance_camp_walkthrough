import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My 1 Doc",
      description: "Doc 1 description",
      file_url: "http://example.com",
      updated_at: "6/6/2017",
      image_url: "https://thumb9.shutterstock.com/display_pic_with_logo/1700341/221855992/stock-photo-the-word-freelance-on-wood-stamp-stacking-on-desk-with-laptop-glasses-and-a-cup-of-coffee-at-home-221855992.jpg"
    },
    {
      title: "My 2 Doc",
      description: "Doc 2 description",
      file_url: "http://example.com",
      updated_at: "5/6/2017",
      image_url: "https://thumb9.shutterstock.com/display_pic_with_logo/1700341/221855992/stock-photo-the-word-freelance-on-wood-stamp-stacking-on-desk-with-laptop-glasses-and-a-cup-of-coffee-at-home-221855992.jpg"
    },
    {
      title: "My 3 Doc",
      description: "Doc 3 description",
      file_url: "http://example.com",
      updated_at: "6/7/2017",
      image_url: "https://thumb9.shutterstock.com/display_pic_with_logo/1700341/221855992/stock-photo-the-word-freelance-on-wood-stamp-stacking-on-desk-with-laptop-glasses-and-a-cup-of-coffee-at-home-221855992.jpg"
    }
  ]
}
