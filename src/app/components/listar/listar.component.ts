import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @Input() listForm : any ;
  @Output() eliminar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // eliminar(index:number){
  //   this.eliminar.emit(index)
  // }

}
