import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';

@Injectable()
export class ProposalsService {
  private propoalsUrl = 'http://dockerhost:3002/proposals.json';

  constructor(
    private http: Http
  ) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.propoalsUrl)
                    .map((response: Response) => <Proposal[]>response.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
