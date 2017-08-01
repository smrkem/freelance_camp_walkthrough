import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalsService } from './proposals.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalsService ]
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private proposalsService: ProposalsService,
    private http: Http
  ) {}

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) => this.proposalsService.getProposal(+params['id']));

    proposalRequest.subscribe(response => {
      this.proposal = response.json();
    });
  }
}
