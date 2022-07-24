"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConsultarEstudianteComponent = void 0;
var core_1 = require("@angular/core");
var ver_estudiante_curso_component_1 = require("../../../nota/pages/ver-estudiante-curso/ver-estudiante-curso.component");
var ConsultarEstudianteComponent = /** @class */ (function () {
    function ConsultarEstudianteComponent(estudianteService) {
        this.estudianteService = estudianteService;
        this.botonRegistrar = {
            mensaje: 'Registrar Estudiante',
            color: 'primary',
            icono: 'app_registration',
            ruta: 'estudiante/registrar-estudiante'
        };
    }
    ConsultarEstudianteComponent.prototype.ngOnInit = function () {
        this.consultarEstudiantes();
    };
    ConsultarEstudianteComponent.prototype.consultarEstudiantes = function () {
        var _this = this;
        this.estudianteService.get()
            .subscribe(function (estudiantes) { return _this.estudiantes = estudiantes; });
    };
    ConsultarEstudianteComponent.prototype.redireccionar = function (estudiante) {
        var botones = [];
        botones.push({
            mensaje: 'Ver cursos',
            icono: 'manage_search',
            id: estudiante.id,
            objeto: estudiante,
            componente: ver_estudiante_curso_component_1.VerEstudianteCursoComponent
        });
        return botones;
    };
    ConsultarEstudianteComponent = __decorate([
        core_1.Component({
            selector: 'app-consultar-estudiante',
            templateUrl: './consultar-estudiante.component.html',
            styleUrls: ['./consultar-estudiante.component.css']
        })
    ], ConsultarEstudianteComponent);
    return ConsultarEstudianteComponent;
}());
exports.ConsultarEstudianteComponent = ConsultarEstudianteComponent;
