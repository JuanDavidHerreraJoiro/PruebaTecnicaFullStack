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
exports.RegistrarEstudianteComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var RegistrarEstudianteComponent = /** @class */ (function () {
    function RegistrarEstudianteComponent(fb, estudianteService, vs) {
        this.fb = fb;
        this.estudianteService = estudianteService;
        this.vs = vs;
        this.miFormulario = this.fb.group({
            identificacion: ['', [forms_1.Validators.required]],
            tipoIdentificacion: ['', [forms_1.Validators.required]],
            nombres: ['', [forms_1.Validators.required]],
            apellidos: ['', [forms_1.Validators.required]],
            correo: ['', [forms_1.Validators.required]],
            telefono: ['', [forms_1.Validators.required]],
            direccion: ['', [forms_1.Validators.required]]
        });
    }
    RegistrarEstudianteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miFormulario.valueChanges.subscribe(function (_a) {
            var identificacion = _a.identificacion, tipoIdentificacion = _a.tipoIdentificacion, nombres = _a.nombres, apellidos = _a.apellidos, correo = _a.correo, telefono = _a.telefono, direccion = _a.direccion, form = __rest(_a, ["identificacion", "tipoIdentificacion", "nombres", "apellidos", "correo", "telefono", "direccion"]);
            _this.estudiante = {
                'identificacion': '' + identificacion,
                'tipoIdentificacion': tipoIdentificacion,
                'nombres': nombres,
                'apellidos': apellidos,
                'correo': correo,
                'telefono': '' + telefono,
                'direccion': direccion
            };
        });
    };
    RegistrarEstudianteComponent.prototype.guardar = function () {
        var _this = this;
        if (this.miFormulario.invalid) {
            this.miFormulario.markAllAsTouched();
            return;
        }
        //console.log(this.estudiante);
        this.estudianteService.post(this.estudiante)
            .subscribe(function (resp) {
            if (resp.ok !== false) {
                sweetalert2_1["default"].fire('Estudiante registrado correctamente', resp.error, 'success');
                _this.miFormulario.reset();
            }
            else {
                sweetalert2_1["default"].fire('Error estudiante ya registrado', resp.error, 'error');
            }
        });
    };
    RegistrarEstudianteComponent = __decorate([
        core_1.Component({
            selector: 'app-registrar-estudiante',
            templateUrl: './registrar-estudiante.component.html',
            styleUrls: ['./registrar-estudiante.component.css']
        })
    ], RegistrarEstudianteComponent);
    return RegistrarEstudianteComponent;
}());
exports.RegistrarEstudianteComponent = RegistrarEstudianteComponent;
