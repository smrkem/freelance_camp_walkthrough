import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalsService } from './proposals.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
})
export class ProposalNewComponent {
  proposal = new Proposal;
  submitted: boolean = false;

  constructor(
    private proposalsService: ProposalsService
  ) {}

  createProposal(proposal) {
    this.submitted = true;
    this.proposalsService.createProposal(proposal).subscribe(
      data => return true,
      error => {
        console.log("Error saving proposal");
        return Observable.throw(error);
      }
    );
  }
}
