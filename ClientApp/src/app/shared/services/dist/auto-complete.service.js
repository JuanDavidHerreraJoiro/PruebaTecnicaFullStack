"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AutoCompleteService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AutoCompleteService = /** @class */ (function () {
    function AutoCompleteService(tc) {
        this.tc = tc;
    }
    AutoCompleteService.prototype.recibirForm = function (formulario) {
        this.miFormulario = formulario;
    };
    AutoCompleteService.prototype.autoComplete = function (lista, campo, tipo) {
        var _this = this;
        var _a, _b;
        return this.filteredOptions = (_b = (_a = this.miFormulario) === null || _a === void 0 ? void 0 : _a.get(campo)) === null || _b === void 0 ? void 0 : _b.valueChanges.pipe(rxjs_1.startWith(''), rxjs_1.map(function (name) { return (name ? _this._filter(lista, name, tipo).slice(0, 5) : lista.slice(0, 5)); }));
    };
    AutoCompleteService.prototype.opcionSeleccionada = function (dato, tipo) {
        var _a;
        if (dato == undefined) {
            return;
        }
        var formulario = (_a = this.miFormulario) === null || _a === void 0 ? void 0 : _a.get(tipo);
        switch (tipo) {
            case 'curso':
                formulario === null || formulario === void 0 ? void 0 : formulario.reset(this.tc.transform(dato.nombre));
                break;
            case 'estudiante':
                formulario === null || formulario === void 0 ? void 0 : formulario.reset(this.tc.transform(dato.nombres + ' ' + dato.apellidos));
                break;
        }
    };
    AutoCompleteService.prototype._filter = function (lista, name, tipo) {
        var filterValue = name.toString().toLowerCase();
        if (tipo == '1') {
            return lista.filter(function (option) { return option['nombres'].toLowerCase().includes(filterValue) || option['apellidos'].toLowerCase().includes(filterValue); });
        }
        else {
            return lista.filter(function (option) { return option['nombre'].toLowerCase().includes(filterValue); });
        }
    };
    AutoCompleteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AutoCompleteService);
    return AutoCompleteService;
}());
exports.AutoCompleteService = AutoCompleteService;
