import { HttpClient } from "@angular/common/http";
import { AbstractConsumer } from "./abstract.consumer";
import { Injectable } from "@angular/core";
import { Anuncio } from "../model/anuncio";

@Injectable({
    providedIn: 'root'
  })
export class AnuncioConsumer extends AbstractConsumer<Anuncio>{
    constructor(http: HttpClient) {
        super(http, 'anuncio');
    }
}