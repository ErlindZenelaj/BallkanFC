import { Injectable } from '@angular/core';
    
@Injectable(
)
export class ProductService {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'BKT SUPERLIGA',
                description: 'Product Description',
                image: 'Trophy2021.png',
                year: '2021-2022',
                buttonLabel: 'Show Table',
                iframeSrc: 'https://widgets.sofascore.com/embed/tournament/55432/season/37434/standings/Superliga?widgetTitle=Superliga&showCompetitionLogo=true'
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'ALBI MALL SUPERLIGA',
                description: 'Product Description',
                image: 'Trophy2022.png',
                year: '2022-2023',
                buttonLabel: 'Show Table',
                iframeSrc: 'https://widgets.sofascore.com/embed/tournament/55432/season/44487/standings/Superliga%2022%2F23?widgetTitle=Superliga%2022/23&showCompetitionLogo=true'
            },            
            {
                id: '1002',
                code: 'nvklal433',
                name: 'Comming Soon...',
                description: 'Product Description',
                image: '#',
                year: '2023-2024',

            },
            // {
            //     id: '1003',
            //     code: 'nvklal433',
            //     name: 'Com,ing Soon...',
            //     description: 'Product Description',
            //     image: '#',
            //     year: '2024-2025',

            // },
           
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    // getProductsWithOrdersSmall() {
    //     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    // }

    // getProductsWithOrders() {
    //     return Promise.resolve(this.getProductsWithOrdersData());
    // }
};