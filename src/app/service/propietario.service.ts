import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Propietario } from '../model/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  //private url:string=environment.host+"/propietarios"
  private url: string = `${environment.host}/propietarios`
  private listaCambio = new Subject<Propietario[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Propietario[]>(this.url);
  }
  dominio() {
    return this.http.get<Propietario[]>(`${this.url}/buscarcorreos`);
  }
  insertar(propietario: Propietario) {

    return this.http.post(this.url, propietario);
  }

  modificar(propietario: Propietario) {

    return this.http.put(this.url, propietario);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string) {
        console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Propietario[]>(`${this.url}/buscarcorreos`, texto.toLowerCase());
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<Propietario>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Propietario[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
