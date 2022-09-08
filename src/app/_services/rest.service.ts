import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpService: HttpClient) {}

  read<TRes>(url: string) {
    return this.httpService.get<TRes>(url);
  }

  create<TReq, TRes>(url: string, data: TReq) {
    return this.httpService.post<TRes>(url, data);
  }

  update<TReq, TRes>(url: string, data: TReq) {
    return this.httpService.put<TRes>(url, data);
  }

  delete(url: string) {
    return this.httpService.delete(url);
  }
}
