import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  //title = 'form-angular';
  productForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    apiCategoryId: new FormControl('', Validators.required) // New dropdown for API categories
  });  
  //Arreglo de categorías
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home' }
  ];

   apiCategories: any[] = []; // Will hold categories from API

  constructor() {
    // POST request as specified
    fetch('https://api.escuelajs.co/api/v1/categories', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Contruction', 
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwelcolimited.com%2F2021%2F11%2F27%2Fcontruction%2F&psig=AOvVaw30t-D-ReXPUwvrqcE1CA95&ust=1748568515403000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjo67_Dx40DFQAAAAAdAAAAABAE'
      })
    })
      .then(response => response.json())
      .then(data => {
        // If the API returns a single object, wrap it in an array
        this.apiCategories = Array.isArray(data) ? data : [data];
      })
      .catch(error => console.error('Error:', error));
  }

  onSubmit() {
    
      console.log('Form Submitted!', this.productForm.value);
  
  } 
}
