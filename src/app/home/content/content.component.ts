import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from "../../model/Product.model";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  Products: any


  constructor(private productService: ProductService) {
    this.getListProduct()
  }

  getListProduct() {
    this.productService.getAllProduct()
      .subscribe((data: any) => {
        this.productItems = data.map((item: any) => {
          return item
        })

        this.Products = this.productItems
      })

  }

  ngOnInit(): void {

  }



  //============ Cách Thêm và xoá item
  id: number = 0
  add(item: any) {
    let { id, ...data } = item
    this.productService.create(data)
  }


  productItems: any = []
  assignItem() {
    this.productItems = Object.assign([], this.Products)
  }

  searchString: String = ''
  search(value: any): any {
    let result = Object.assign([], this.Products)
    this.searchString = value.toLowerCase()

    // search Result 
    result = result.filter((item: any) => item.product_name.toLowerCase().indexOf(this.searchString) != -1)

    if (result.length != 0) {
      console.log(result);

      return this.productItems = result
    }

    if (this.searchString.trim() == '') {
      return this.assignItem()
    }
    return this.assignItem()
  }

}
