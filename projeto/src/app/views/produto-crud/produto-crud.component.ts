import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navegateToProductCreate(): void{
    this.router.navigate(['/products/creat'])
  }
  
}
