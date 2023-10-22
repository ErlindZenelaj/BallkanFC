import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {
    getData() {
        return [
            {
                id: 1000,
                name: 'Almir Kryeziu',
                country: {
                    name: 'Kosovo',
                    code: 'ks'
                },
                goals: 1,
                assist: 0,
              

            },
            {
                id: 1000,
                name: 'Walid Hamidi',
                country: {
                    name: 'Algeria',
                    code: 'Al'
                },
                goals: 1,
                assist: 0,
              
            },
            {
                id: 1000,
                name: 'Qendrim Zyba',
                country: {
                    name: 'Kosovo',
                    code: 'ks'
                },
                goals: 0,
                assist: 1,
              
            },

        ];
    }

    constructor(private http: HttpClient) {}
    
    getPlayersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getPlayersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getPlayersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getPlayersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getPlayersXLarge() {
        return Promise.resolve(this.getData());
    }

};