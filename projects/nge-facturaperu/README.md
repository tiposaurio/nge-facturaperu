# Nge-facturaperu

Nge-facturaperu. Es un proyecto de libreria javascript que contiene componentes reutilizables para el proyectos web de [facturación electrónica](http://svs.factura-peru.com/) u [algún otro proyecto web](http://hotelparis.pe/).

## Contenido
<ul>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#requisitos">Requisitos</a></li>
    <li><a href="#instalación">Instalación</a></li>
    <li><a href="#configuración de los estilos">Configuración de los estilos</a></li>
    <li><a href="#colaboradores">Colaboradores</a></li>
    <li><a href="#autores">Autores</a></li>
    <li><a href="#licencia">Licencia</a></li>
</ul>
    
## Demo
puedes ver todos los componentes que tenemos aquí [Demo](http://svs.factura-peru.com/)

## Requisitos
los requisitos para la estética.

* Angular versión 7.1.0+
* Bootstrap Versión 4.0.0
* Font-awesome Versión 4.7.0

los requisitos para los archivos PDF y Excel.

* makepdf Versión 0.1.62
* exceljs Versión 1.12.2
* file-saver Versión 2.0.2
## Instalación

instalar primero los requisitos con `npm`.

Luego instalamos Bootstrap.

```shell
npm i -save bootstrap@4.0.0
```

Ahora instalamos Font-awesome

```shell
npm i --save font-awesome@4.7.0
```

Finalmente instalamos el paquete con el siguiente comando.

```shell
npm install --save nge-facturaperu
```

## Configuración de los estilos.

Agregamos en el archivo `angular.json` de nuestro proyecto.

```json
"styles": [
  "node_modules/font-awesome/scss/font-awesome.scss",
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "node_modules/pdfmake/build/pdfmake.js",
  "node_modules/pdfmake/build/vfs_fonts.js",
  "node_modules/exceljs/dist/exceljs.min.js"
],
```
Agregamos en el archivo `tsconfig.json` de nuestro proyecto(para el archivo excel).

```json
"compilerOptions": {
    "paths": {
      "exceljs": [
        "node_modules/exceljs/dist/exceljs.min"
      ]
    },
  ...
}
```

Luego agregar el módulo del componente que deseas utilizar en el `AppModule` o `xModule` de tu aplicación.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgeButtonIconModule, NgeFacturaPeruModule } from 'nge-facturaperu';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgeFacturaPeruModule,
    NgeButtonIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
y ya podras utilizarlo en tu componente html.
```html
<nge-facturaperu></nge-facturaperu>

<nge-button-icon></nge-button-icon>
```

## Colaboradores.

* [Vitmar J. Aliaga Cruz](https://github.com/valiaga).

## Autores

* [Guido L. Calsina Tipo](https://github.com/tiposaurio).
* [Noe W. Tipo Mamani](https://github.com/noetipo).
* [Eder Gutierrez Quispe](https://github.com/noetipo).

## Licencia

Este proyecto esta bajo la licencia MIT.