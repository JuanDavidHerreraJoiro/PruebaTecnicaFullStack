"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ValidacionService = void 0;
var core_1 = require("@angular/core");
var myErrorStateMatcher_1 = require("src/app/shared/classes/myErrorStateMatcher");
var ValidacionService = /** @class */ (function () {
    function ValidacionService() {
        this.correoPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
        this.numeroPattern = '^[0-9]*$';
        this.decimalPattern = '^[0-9.]*$';
        this.matcher = new myErrorStateMatcher_1.MyErrorStateMatcher();
    }
    ValidacionService.prototype.recibirForm = function (formulario) {
        this.miFormulario = formulario;
    };
    ValidacionService.prototype.campoEsValido = function (campo) {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.miFormulario) === null || _a === void 0 ? void 0 : _a.get(campo)) === null || _b === void 0 ? void 0 : _b.invalid) && ((_d = (_c = this.miFormulario) === null || _c === void 0 ? void 0 : _c.get(campo)) === null || _d === void 0 ? void 0 : _d.touched);
    };
    ValidacionService.prototype.getMensaje = function (campo) {
        var _a, _b;
        var errorControl = (_b = (_a = this.miFormulario) === null || _a === void 0 ? void 0 : _a.get(campo)) === null || _b === void 0 ? void 0 : _b.errors;
        if (errorControl === null || errorControl === void 0 ? void 0 : errorControl['required'])
            return 'El campo es requerido';
        else if (errorControl === null || errorControl === void 0 ? void 0 : errorControl['minlength'])
            return 'El campo debe contener mínimo ' + (errorControl === null || errorControl === void 0 ? void 0 : errorControl['minlength'].requiredLength) + ' caracteres';
        else if (errorControl === null || errorControl === void 0 ? void 0 : errorControl['pattern']) {
            if ((errorControl === null || errorControl === void 0 ? void 0 : errorControl['pattern'].requiredPattern) === this.numeroPattern)
                return 'El campo debe ser un número positivo sin comas ni puntos';
            else if ((errorControl === null || errorControl === void 0 ? void 0 : errorControl['pattern'].requiredPattern) === this.decimalPattern)
                return 'El campo debe ser un número positivo';
            else if ((errorControl === null || errorControl === void 0 ? void 0 : errorControl['pattern'].requiredPattern) === this.correoPattern)
                return 'El campo debe ser un correo electrónico';
        }
        else if (errorControl === null || errorControl === void 0 ? void 0 : errorControl['correoTomado'])
            return 'Este correo ya se encuentra registrado';
        else if (errorControl === null || errorControl === void 0 ? void 0 : errorControl['noExiste'])
            return 'Este ' + campo + ' no se encuentra registrado';
        return '';
    };
    ValidacionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ValidacionService);
    return ValidacionService;
}());
exports.ValidacionService = ValidacionService;
