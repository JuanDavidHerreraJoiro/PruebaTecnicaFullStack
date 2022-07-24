"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ActualizarNotaComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var sweetalert2_1 = require("sweetalert2");
var ActualizarNotaComponent = /** @class */ (function () {
    function ActualizarNotaComponent(fb, notaService, data, vs, dialogRef) {
        this.fb = fb;
        this.notaService = notaService;
        this.data = data;
        this.vs = vs;
        this.dialogRef = dialogRef;
        this.miFormulario = this.fb.group({
            nota1: [this.data.nota1, [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.decimalPattern)]],
            nota2: [this.data.nota2, [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.decimalPattern)]],
            nota3: [this.data.nota3, [forms_1.Validators.required, forms_1.Validators.pattern(this.vs.decimalPattern)]]
        });
    }
    ActualizarNotaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miFormulario.valueChanges.subscribe(function (_a) {
            var nota1 = _a.nota1, nota2 = _a.nota2, nota3 = _a.nota3, form = __rest(_a, ["nota1", "nota2", "nota3"]);
            _this.nota = {
                'nota1': nota1,
                'nota2': nota2,
                'nota3': nota3,
                'estudianteId': _this.data.estudianteId,
                'cursoId': _this.data.cursoId
            };
        });
    };
    ActualizarNotaComponent.prototype.actualizar = function () {
        var _this = this;
        var _a;
        if (this.miFormulario.invalid) {
            this.miFormulario.markAllAsTouched();
            return;
        }
        this.notaService.put(this.nota)
            .subscribe(function (resp) {
            if (resp.ok !== false) {
                sweetalert2_1["default"].fire('Nota Actualizada correctamente', resp.error, 'success');
                _this.miFormulario.reset();
            }
            else {
                sweetalert2_1["default"].fire('Error nota no Actualizada', resp.error, 'error');
            }
        });
        (_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.close();
        //window.location.reload();
    };
    ActualizarNotaComponent = __decorate([
        core_1.Component({
            selector: 'app-actualizar-nota',
            templateUrl: './actualizar-nota.component.html',
            styleUrls: ['./actualizar-nota.component.css']
        }),
        __param(2, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ActualizarNotaComponent);
    return ActualizarNotaComponent;
}());
exports.ActualizarNotaComponent = ActualizarNotaComponent;
