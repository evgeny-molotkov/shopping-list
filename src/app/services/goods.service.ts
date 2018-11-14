import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GoodsGroupModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

    private goodsUrl = 'https://ssdev.superagent.ru/TestApp/Values/GetWithParent';

    constructor(
        private http: HttpClient
    ) { }

    getGoods (): Observable<GoodsGroupModel[]> {
        return this.http.get<GoodsGroupModel[]>(this.goodsUrl);
    }
}
