import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../album';
import { Photo } from '../photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private url='https://jsonplaceholder.typicode.com/albums';


  constructor(private http:HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(`${this.url}`)
  }

  getAlbumById(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.url}/${id}`)
  }

  deleteAlbum(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
  
  updateAlbum(id: number, album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.url}/${id}`, album);
  }

  getPhotos(id:number):Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}/${id}/photos`)
  }
  
  
}
