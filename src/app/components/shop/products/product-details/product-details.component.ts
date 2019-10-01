import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
 zoomViewer: any;
  public config: SwiperConfigInterface={};

  public product            :   Product = {};
  public products           :   Product[] = [];

  public image: any;
  public zoomImage: any;

  public counter            :   number = 1;

  index: number;

  constructor(private route: ActivatedRoute, public productsService: ProductService, public dialog: MatDialog, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
    this.route.params
    .subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.productsService.getProduct(this.index).subscribe(product => this.product = product)
      }
    )

    this.getRelatedProducts();
  }


  ngAfterViewInit(){
    this.config = {
      observer: false,
      slidesPerView: 4,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3,
        }
      }
    }
  }

  public selectImage(image){
    this.image = image.medium;
    this.zoomImage = image.big;
  }


public slideConfig = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
};

public slideNavConfig = {
  vertical: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-slick',
  arrows: false,
  dots: false,
  focusOnSelect: true
}


public increment() {
  this.counter += 1;
}

public decrement() {
  if(this.counter >1){
     this.counter -= 1;
  }
}

getRelatedProducts() {
  this.productsService.getProducts()
  .subscribe(
    (product: Product[]) => {
      this.products = product
    });
}

  // Add to cart
  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
  }

   // Add to cart
   public buyNow(product: Product, quantity) {
    if (quantity > 0)
      this.cartService.addToCart(product,parseInt(quantity));
      this.router.navigate(['/pages/checkout']);
 }

 public onMouseMove(e){
  if(window.innerWidth >= 1280){
    var image, offsetX, offsetY, x, y, zoomer;
    image = e.currentTarget; 
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    x = offsetX/image.offsetWidth*100;
    y = offsetY/image.offsetHeight*100;
    zoomer = this.zoomViewer.nativeElement.children[0];
    if(zoomer){
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
      zoomer.style.display = "block";
      zoomer.style.height = image.height + 'px';
      zoomer.style.width = image.width + 'px';
    }
  }
}

// public onMouseLeave(event){
//   this.zoomViewer.nativeElement.children[0].style.display = "none";
// }








}


