import { Component } from '@angular/core';
import { ProizvodService } from '../../services/proizvod.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Proizvod } from '../../model/proizvod';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent {

  constructor(
    private service: ProizvodService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  formProizvod : FormGroup;

  ngOnInit(): void {

    this.formProizvod = new FormGroup({
      id: new FormControl(),
      naziv: new FormControl(),
      boja: new FormControl(),
      cena: new FormControl(),
      kategorija: new FormControl(),
      datumKreiranja: new FormControl(),
      slika: new FormControl()
    });

    if(this.route.snapshot.queryParams['edit']=='true'){

      this.service.getProductById(this.route.snapshot.params['id']).subscribe((data) => {
        console.log(data);
        this.formProizvod.setValue(data);
        this.formProizvod.controls['id'].disable();
      });
    
    }
    else
    {
      console.log('nije edit');
      this.formProizvod.controls['id'].disable();
    }
  }

  save(){
    let noviProizvod:Proizvod;
    noviProizvod = this.formProizvod.getRawValue();
    console.log(noviProizvod);
    this.service.addEditProizvod(noviProizvod)
   // this.goBack();
  }

  goBack() {
    this.router.navigate(['/']);
  }




}
