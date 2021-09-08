import { Receita } from './../receita.model';
import { ReceitaService } from './../receita.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-read',
  templateUrl: './receita-read.component.html',
  styleUrls: ['./receita-read.component.css']
})
export class ReceitaReadComponent implements OnInit {

  receita: Receita[] = [];
  displayedColumns = ['id', 'name', 'action']

  constructor(private receitaService: ReceitaService) { }

  ngOnInit(): void {
    this.receitaService.read().subscribe(receita =>{
      this.receita = receita
    })

  }

}
