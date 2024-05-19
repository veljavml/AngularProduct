import { Component } from '@angular/core';
import { ProizvodService } from '../../services/proizvod.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvod } from '../../model/proizvod';

@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrl: './prikaz.component.css'
})
export class PrikazComponent {

  constructor(private servis:ProizvodService, private router:Router) { }

  ngOnInit(): void {

    this.servis.getProduct().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }
  dataSource = new MatTableDataSource<Proizvod>();
  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena', 'kategorija', 'datumKreiranja','slika','akcija'];

  edit(id:number){

    this.router.navigate(['/addedit/' + id], { queryParams: { edit: 'true' } });

  }

  delete(id:number){

    if(confirm('Da li ste sigurni da zelite da obrisete proizvod?'))
      {
        this.servis.deleteProizvod(id);
      }

  }

  filter(event: any) {
    if (!event.target.value)
      return;
    this.dataSource.filter = event.target.value.trim().toLowerCase()
  }


  add(){
    this.router.navigate(['addedit']);
  }

}
