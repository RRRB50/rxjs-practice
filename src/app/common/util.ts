import { Observable } from "rxjs";

export function createHttpObserverable(url: string){
  return Observable.create(observer => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      })
  });
}
