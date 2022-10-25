import { Component, OnInit } from '@angular/core';
import { Barco } from '../barco';

export class Barcomponents implements OnInit {

    public barcos : Barco[] = [];   
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

getHeroes(): void {
    this.barc.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}