import { Receita } from './../receita.model';
import { ReceitaService } from './../receita.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-receita-creat',
  templateUrl: './receita-creat.component.html',
  styleUrls: ['./receita-creat.component.css']
})
export class ReceitaCreatComponent implements OnInit {

  receita: Receita = {
    name:'',
    produtos: [],
    qtdutilizado: 0,
  }

  constructor(private receitaService: ReceitaService, private router: Router ) { }

  ngOnInit(): void {
  }

  createReceita(): void {
      this.receitaService.create(this.receita).subscribe(() =>{
      this.receitaService.showMessage('Receita Criado!')
      this.router.navigate(['/receita'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/receita'])
  }

}
