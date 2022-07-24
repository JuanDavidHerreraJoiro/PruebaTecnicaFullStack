"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConsultarNotaComponent = void 0;
var core_1 = require("@angular/core");
var actualizar_nota_component_1 = require("../actualizar-nota/actualizar-nota.component");
var ConsultarNotaComponent = /** @class */ (function () {
    function ConsultarNotaComponent(notaService) {
        this.notaService = notaService;
        this.botonRegistrar = {
            mensaje: 'Registrar Nota',
            color: 'primary',
            icono: 'app_registration',
            ruta: 'nota/registrar-nota'
        };
    }
    ConsultarNotaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.consultarNotas();
        this.suscription = this.notaService.refrescar$.subscribe(function () {
            _this.consultarNotas();
        });
    };
    ConsultarNotaComponent.prototype.consultarNotas = function () {
        var _this = this;
        this.notaService.get()
            .subscribe(function (notas) { return _this.notas = notas; });
    };
    ConsultarNotaComponent.prototype.redireccionar = function (nota) {
        var botones = [];
        botones.push({
            mensaje: 'Actualizar Nota',
            icono: 'edit_note',
            id: nota.id,
            objeto: nota,
            componente: actualizar_nota_component_1.ActualizarNotaComponent
        });
        return botones;
    };
    ConsultarNotaComponent = __decorate([
        core_1.Component({
            selector: 'app-consultar-nota',
            templateUrl: './consultar-nota.component.html',
            styleUrls: ['./consultar-nota.component.css']
        })
    ], ConsultarNotaComponent);
    return ConsultarNotaComponent;
}());
exports.ConsultarNotaComponent = ConsultarNotaComponent;
