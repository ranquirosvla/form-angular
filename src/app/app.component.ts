import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, RouterOutlet],
 //standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  //title = 'form-angular';
  productForm = new FormGroup({
    title: new FormControl('', Validators.required),    
    price: new FormControl(Validators.required, Validators.pattern('^[0-9]+$')),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl (Validators.required, Validators.pattern('^[0-9]+$')),  
  });   
  //Arreglo de categorías
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home' }
  ];
  onSubmit() {
    
      console.log('Form Submitted!', this.productForm.value);
  
  } 
}
