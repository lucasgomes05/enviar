import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-receita-crud',
  templateUrl: './receita-crud.component.html',
  styleUrls: ['./receita-crud.component.css']
})
export class ReceitaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Receitas',
      icon: 'receipt',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navegateToReceitaCreate(): void{
    this.router.navigate(['/receita/creat'])
  }
}
