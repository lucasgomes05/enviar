import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.model';
import { Receita } from '../receita.model';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receita-update',
  templateUrl: './receita-update.component.html',
  styleUrls: ['./receita-update.component.css']
})
export class ReceitaUpdateComponent implements OnInit {
  
  receita: any;

  constructor(private receitaService: ReceitaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.receitaService.readById(id!).subscribe(receita => {
      this.receita = receita
    })
  }

  updateReceita(): void {
    this.receitaService.update(this.receita).subscribe(()=>{
      this.receitaService.showMessage('Receita atualizada com sucesso!')
      this.router.navigate(['/receita'])
    })
  }

  cancel(): void {
    this.router.navigate(['/receita'])
  }
}
