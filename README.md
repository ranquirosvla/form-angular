# FormAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


Readme

Instruccion:
modify de categoryId FormControl for a selector

Resultado:

Para archivo ts:
  productForm = new FormGroup({
    title: new FormControl('', Validators.required),    
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),  
  });   

  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home' }
  ];

Para archivo html:

<fieldset>
  <label for="categoryId"> Category: </label>
  <select id="categoryId" name="categoryId" formControlName="categoryId" required>
    <option value="" disabled selected>Select a category</option>
    <option *ngFor="let category of categories" [value]="category.id">{{ category.name }}</option>
  </select>
</fieldset>

Intruccion:

don't use ngFor, use @for

Result:

<fieldset>
  <label for="categoryId"> Category: </label>
  <select id="categoryId" name="categoryId" formControlName="categoryId" required>
    <option value="" disabled selected>Select a category</option>
    @for (category of categories; track category.id) {
      <option [value]="category.id">{{ category.name }}</option>
    }
  </select>
</fieldset>

Note que los datos del formulario no estaban llegando correctamente a la consola o no se guardaban, le pregunte a Copilot a que se debia y me dio la solucion:
Instruccion:
why the console is not showing the data entered in the input fields?

<!-- ...existing code... -->
<fieldset>
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" required formControlName="title">

  <label for="price">Price:</label>
  <input type="text" id="price" name="price" required formControlName="price">
</fieldset>
<fieldset>
  <label for="description">Description:</label>
  <input type="text" id="description" name="description" required formControlName="description">
</fieldset>
<!-- ...existing code... -->

Resulta que habia olvidado agregar el formControl a cada input en el html.Quedo corregido.

