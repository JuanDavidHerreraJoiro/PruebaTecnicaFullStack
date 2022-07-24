"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var navbar_component_1 = require("./components/navbar/navbar.component");
var sidenav_component_1 = require("./components/sidenav/sidenav.component");
var material_module_1 = require("../design-modules/material.module");
var prime_ng_module_1 = require("../design-modules/prime-ng.module");
var input_filtro_component_1 = require("./components/input-filtro/input-filtro.component");
var boton_responsive_component_1 = require("./components/boton-responsive/boton-responsive.component");
var spinner_component_1 = require("./components/spinner/spinner.component");
var boton_menu_component_1 = require("./components/boton-menu/boton-menu.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                sidenav_component_1.SidenavComponent,
                navbar_component_1.NavbarComponent,
                input_filtro_component_1.InputFiltroComponent,
                boton_responsive_component_1.BotonResponsiveComponent,
                spinner_component_1.SpinnerComponent,
                boton_menu_component_1.BotonMenuComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                material_module_1.MaterialModule,
                prime_ng_module_1.PrimeNgModule
            ],
            exports: [
                sidenav_component_1.SidenavComponent,
                navbar_component_1.NavbarComponent,
                input_filtro_component_1.InputFiltroComponent,
                boton_responsive_component_1.BotonResponsiveComponent,
                spinner_component_1.SpinnerComponent,
                boton_menu_component_1.BotonMenuComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
