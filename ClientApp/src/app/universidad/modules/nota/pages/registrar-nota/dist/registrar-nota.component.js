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
exports.RegistrarNotaComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var RegistrarNotaComponent = /** @class */ (function () {
    function RegistrarNotaComponent(fb, notaService, estudianteService, cursoService, vs, autoCompleteService) {
        this.fb = fb;
        this.notaService = notaService;
        this.estudianteService = estudianteService;
        this.cursoService = cursoService;
        this.vs = vs;
        this.autoCompleteService = autoCompleteService;
        this.miFormulario = this.fb.group({
            nota1: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.decimalPattern)]],
            nota2: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.decimalPattern)]],
            nota3: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.decimalPattern)]],
            estudiante: ['', [forms_1.Validators.required]],
            curso: ['', [forms_1.Validators.required]]
        });
        this.listaEstudiantes = [];
        this.listaCursos = [];
        this.estudianteId = 0;
        this.cursoId = 0;
    }
    RegistrarNotaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vs.recibirForm(this.miFormulario);
        this.autoCompleteService.recibirForm(this.miFormulario);
        this.autoComplete();
        this.miFormulario.valueChanges.subscribe(function (_a) {
            var nota1 = _a.nota1, nota2 = _a.nota2, nota3 = _a.nota3, form = __rest(_a, ["nota1", "nota2", "nota3"]);
            _this.nota = {
                'nota1': nota1,
                'nota2': nota2,
                'nota3': nota3,
                'estudianteId': _this.estudianteId,
                'cursoId': _this.cursoId
            };
        });
    };
    RegistrarNotaComponent.prototype.autoComplete = function () {
        var _this = this;
        this.estudianteService.get()
            .subscribe(function (res) {
            var _a;
            _this.listaEstudiantes = res;
            _this.filteredOptionsEstudiantes = _this.autoCompleteService.autoComplete(_this.listaEstudiantes, 'estudiante', '1');
            (_a = _this.filteredOptionsEstudiantes) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) { return _this.listaEstudiantes = result; });
        });
        this.cursoService.get()
            .subscribe(function (res) {
            var _a;
            _this.listaCursos = res;
            _this.filteredOptionsCursos = _this.autoCompleteService.autoComplete(_this.listaCursos, 'curso', '2');
            (_a = _this.filteredOptionsCursos) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) { return _this.listaCursos = result; });
        });
    };
    RegistrarNotaComponent.prototype.opcionSeleccionada = function (event, tipo) {
        switch (tipo) {
            case 'estudiante':
                this.estudianteId = event.option.value['id'];
                this.dato = event.option.value;
                this.autoCompleteService.opcionSeleccionada(this.dato, tipo);
                break;
            case 'curso':
                this.cursoId = event.option.value['id'];
                this.dato = event.option.value;
                this.autoCompleteService.opcionSeleccionada(this.dato, tipo);
                break;
        }
    };
    RegistrarNotaComponent.prototype.guardar = function () {
        var _this = this;
        if (this.miFormulario.invalid) {
            this.miFormulario.markAllAsTouched();
            return;
        }
        this.notaService.post(this.nota)
            .subscribe(function (resp) {
            if (resp.ok !== false) {
                sweetalert2_1["default"].fire('Nota registrada correctamente', resp.error, 'success');
                _this.miFormulario.reset();
            }
            else {
                sweetalert2_1["default"].fire('Error nota ya registradas', resp.error, 'error');
            }
        });
    };
    RegistrarNotaComponent = __decorate([
        core_1.Component({
            selector: 'app-registrar-nota',
            templateUrl: './registrar-nota.component.html',
            styleUrls: ['./registrar-nota.component.css']
        })
    ], RegistrarNotaComponent);
    return RegistrarNotaComponent;
}());
exports.RegistrarNotaComponent = RegistrarNotaComponent;
