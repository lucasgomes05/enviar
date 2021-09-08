import { ReceitaService } from './../receita.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from '../receita.model';

@Component({
  selector: 'app-receita-delete',
  templateUrl: './receita-delete.component.html',
  styleUrls: ['./receita-delete.component.css']
})
export class ReceitaDeleteComponent implements OnInit {

  receita: any;

  constructor(private receitaService: ReceitaService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.receitaService.readById(id!).subscribe(receita => {
      this.receita = receita
    })
  }

  
  deleteReceita(): void{
    this.receitaService.delete(`${this.receita.id}`).subscribe( () =>{
      this.receitaService.showMessage('Receita excluida com sucesso!')
      this.router.navigate(['/receita'])
    })
  }

  cancel(): void{
    this.router.navigate(['/receita'])
  }


}
