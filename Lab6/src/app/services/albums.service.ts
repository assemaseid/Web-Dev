import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../album';
import { Photo } from '../photo';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private localAlbums: Album[] = [];
  private url='https://jsonplaceholder.typicode.com/albums';


  constructor(private http:HttpClient) { }

  getAlbums(): Observable<Album[]> {
    if (this.localAlbums.length) {
      return of(this.localAlbums);
    }
    return this.http.get<Album[]>(this.url).pipe(
      tap((albums: Album[]) => this.localAlbums = albums)
    );
  }
  

  getAlbumById(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.url}/${id}`)
  }

  deleteAlbum(id: number): Observable<void> {
    this.localAlbums = this.localAlbums.filter(a => a.id !== id);
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  
  
  updateAlbum(id: number, album: Album): Observable<Album> {
    this.localAlbums = this.localAlbums.map(a => a.id === id ? album : a);
    return this.http.put<Album>(`${this.url}/${id}`, album); 
  }
  

  getPhotos(id:number):Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}/${id}/photos`)
  }
  
  
}
