import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
//import { LoginCredentials } from '../../shared/dtos/request/loginCredentials';

export abstract class AbstractConsumer<T> {

  protected readonly path: string;

  protected constructor(protected http: HttpClient, private resource: string) {
    this.path = `${environment.apiUrl}/${resource}`;
  }

  public get(id: number | string, endpoint?: string): Observable<T> {
    const url = this.addEndpoint(endpoint!);

    return this.http.get<T>(`${url}/${id}`, {withCredentials: true});
  }

  public list(options?: {
    id?: number | string;
    endpoint?: string;
    pageSize?: number | string;
    pageNumber?: number | string;
    query?: string;
    sort?: string;
    direction?: string;
  }): Observable<Array<T>> {
    let url: string;

    if (options) {
      url = this.addEndpoint(options.endpoint!);
      if (options.sort && options.direction !== '') {
        url += '?sort=' + options.sort + ',' + options.direction;
      }
      if (options.pageNumber) {
        url += (options.sort || options.direction) ? '&' : '?';
        url = url + 'page=' + options.pageNumber;
      }
      if (options.pageSize) {
        url += (options.pageNumber || options.sort || options.direction) ? '&' : '?';
        url += 'size=' + options.pageSize;
      }
      if(options.query){
        url += (options.pageNumber || options.pageSize || options.sort || options.direction) ? '&' : '?';
        url += 'query=' + options.query;
      }
      if (options.id) {
        url = `${url}/${options.id}`;
      }
    } else {
      url = this.path;
    }
    return this.http.get<Array<T>>(url, {withCredentials: true});
  }

  public post(data: T | any, endpoint?: string): Observable<T> {
    const url = this.addEndpoint(endpoint!);

    return this.http.post<T>(url, data, {withCredentials: true});
  }

  public delete(id: number | string, endpoint?: string): Observable<T> {
    const url = this.addEndpoint(endpoint!);

    return this.http.delete<T>(`${url}/${id}`, {withCredentials: true});
  }

  public put(id: number | string, data: any, endpoint?: string): Observable<T> {
    const url = this.addEndpoint(endpoint!);

    return this.http.put<T>(`${url}/${id}`, data, {withCredentials: true});
  }

  public patch(endpoint: string, data?: T) {
    const url = this.addEndpoint(endpoint);

    return this.http.patch(url, data, {withCredentials: true});
  }

  protected addEndpoint(endpoint: string): string {
    return endpoint ? `${this.path}/${endpoint}` : this.path;
  }

}
