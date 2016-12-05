/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
   System.config({
      paths: {
         // paths serve as alias
         'path:': 'public/js/angular/dependencies/'
      },
      // map tells the System loader where to look for things
      map: {
         // our app is within the app folder
         app: 'public/js/angular/app',

         // angular bundles
         '@angular/core': 'path:@angular/core/bundles/core.umd.js',
         '@angular/common': 'path:@angular/common/bundles/common.umd.js',
         '@angular/compiler': 'path:@angular/compiler/bundles/compiler.umd.js',
         '@angular/platform-browser': 'path:@angular/platform-browser/bundles/platform-browser.umd.js',
         '@angular/platform-browser-dynamic': 'path:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
         '@angular/http': 'path:@angular/http/bundles/http.umd.js',
         '@angular/router': 'path:@angular/router/bundles/router.umd.js',
         '@angular/forms': 'path:@angular/forms/bundles/forms.umd.js',

         // other libraries
         'rxjs':                      'path:rxjs'
      },
      // packages tells the System loader how to load when no filename and/or no extension
      packages: {
         app: {
            main: './main.js',
            defaultExtension: 'js'
         },
         rxjs: {
            defaultExtension: 'js'
         }
      }
   });
})(this);
