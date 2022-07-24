"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.RegistrarCursoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var RegistrarCursoComponent = /** @class */ (function () {
    function RegistrarCursoComponent(fb, cursoService, vs) {
        this.fb = fb;
        this.cursoService = cursoService;
        this.vs = vs;
        this.miFormulario = this.fb.group({
            creditos: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.numeroPattern)]],
            nombre: ['', [forms_1.Validators.required]]
        });
    }
    RegistrarCursoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miFormulario.valueChanges.subscribe(function (_a) {
            var creditos = _a.creditos, nombre = _a.nombre, form = __rest(_a, ["creditos", "nombre"]);
            _this.curso = {
                'nombre': nombre,
                'creditos': creditos
            };
        });
    };
    RegistrarCursoComponent.prototype.guardar = function () {
        var _this = this;
        if (this.miFormulario.invalid) {
            this.miFormulario.markAllAsTouched();
            return;
        }
        //console.log(this.curso);
        this.cursoService.post(this.curso)
            .subscribe(function (resp) {
            if (resp.ok !== false) {
                sweetalert2_1["default"].fire('Curso registrado correctamente', resp.error, 'success');
                _this.miFormulario.reset();
            }
            else {
                sweetalert2_1["default"].fire('Error curso ya registradas', resp.error, 'error');
            }
        });
    };
    RegistrarCursoComponent = __decorate([
        core_1.Component({
            selector: 'app-registrar-curso',
            templateUrl: './registrar-curso.component.html',
            styleUrls: ['./registrar-curso.component.css']
        })
    ], RegistrarCursoComponent);
    return RegistrarCursoComponent;
}());
exports.RegistrarCursoComponent = RegistrarCursoComponent;
