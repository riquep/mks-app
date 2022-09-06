import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Messages } from '../models/message';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesResolver implements Resolve<Messages> {
  constructor(private api: ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Messages> {
    return this.api.getMessages();
  }
}
