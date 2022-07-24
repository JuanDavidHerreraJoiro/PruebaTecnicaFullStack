"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConsultarCursoComponent = void 0;
var core_1 = require("@angular/core");
var ver_curso_estudiante_component_1 = require("../../../nota/pages/ver-curso-estudiante/ver-curso-estudiante.component");
var ConsultarCursoComponent = /** @class */ (function () {
    function ConsultarCursoComponent(cursoService) {
        this.cursoService = cursoService;
        this.botonRegistrar = {
            mensaje: 'Registrar Curso',
            color: 'primary',
            icono: 'app_registration',
            ruta: 'curso/registrar-curso'
        };
    }
    ConsultarCursoComponent.prototype.ngOnInit = function () {
        this.consultarCursos();
    };
    ConsultarCursoComponent.prototype.consultarCursos = function () {
        var _this = this;
        this.cursoService.get()
            .subscribe(function (cursos) { return _this.cursos = cursos; });
    };
    ConsultarCursoComponent.prototype.redireccionar = function (curso) {
        var botones = [];
        botones.push({
            mensaje: 'Ver estudiantes',
            icono: 'manage_search',
            id: curso.id,
            objeto: curso,
            componente: ver_curso_estudiante_component_1.VerCursoEstudianteComponent
        });
        return botones;
    };
    ConsultarCursoComponent = __decorate([
        core_1.Component({
            selector: 'app-consultar-curso',
            templateUrl: './consultar-curso.component.html',
            styleUrls: ['./consultar-curso.component.css']
        })
    ], ConsultarCursoComponent);
    return ConsultarCursoComponent;
}());
exports.ConsultarCursoComponent = ConsultarCursoComponent;
