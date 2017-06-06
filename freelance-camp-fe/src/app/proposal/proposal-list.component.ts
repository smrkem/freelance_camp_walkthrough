import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(23, "ACME", "http://example.com/portfolio-a", "Rails, Angular 2", 150, 120, 15, "dude@example.com")
  proposalTwo: Proposal = new Proposal(36, "ABC", "http://example.com/portfolio-b", "Rails, Angular 2", 150, 120, 15, "dude@example.com")
  proposalThree: Proposal = new Proposal(99, "XYZ", "http://example.com/portfolio-c", "Lambda, React", 140, 130, 12, "dude@example.com")

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
