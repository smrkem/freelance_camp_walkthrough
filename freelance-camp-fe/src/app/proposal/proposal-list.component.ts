import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalsService } from './proposals.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {

  proposals: Proposal[];
}
