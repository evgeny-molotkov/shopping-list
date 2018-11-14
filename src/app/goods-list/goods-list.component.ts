import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../services';
import { GoodsItemModel } from '../models';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

    public basketGoodsCount = 0;
    public goods: Array<GoodsItemModel> = [];
    public selectedGoodsId: Array<number> = [];

    constructor(
        private  goodsService: GoodsService
    ) { }

    ngOnInit() {
        this.getGoods();
    }

    getGoods() {
        this.goodsService.getGoods().subscribe((data) => {
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].skus) {
                        for (let j = 0; j < data[i].skus.length; j++) {
                            let good = new GoodsItemModel();
                            good.groupId = data[i].group.id;
                            good.groupName = data[i].group.name;
                            good.id = data[i].skus[j].id;
                            good.name = data[i].skus[j].name;
                            good.price = data[i].skus[j].price;

                            this.goods.push(good);
                        }
                    }
                }
            }
        });
    }

    addToBasket() {
        for (let i = 0; i < this.selectedGoodsId.length; i++) {
            for (let j = 0; j < this.goods.length; j++) {
                if (this.goods[j].id === this.selectedGoodsId[i]) {
                    this.goods.splice(j, 1);
                    this.basketGoodsCount++;
                    break;
                }
            }
        }
        this.selectedGoodsId = [];
    }

    checkSelectedGood(id: number): boolean {
        for (let i = 0; i < this.selectedGoodsId.length; i++) {
            if (this.selectedGoodsId[i] === id) {
                return true;
            }
        }

        return false;
    }

    onChangeSelectedGood(id: number) {
        for (let i = 0; i < this.selectedGoodsId.length; i++) {
            if (this.selectedGoodsId[i] === id) {
                this.selectedGoodsId.splice(i, 1);
                return;
            }
        }

        this.selectedGoodsId.push(id);
    }

}
