"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CursoService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("src/environments/environment");
var CursoService = /** @class */ (function () {
    function CursoService(http, handleError) {
        this.http = http;
        this.handleError = handleError;
        this.baseUrl = environment_1.environment.baseUrl;
    }
    CursoService.prototype.get = function () {
        return this.http.get(this.baseUrl + "/Estudiante")
            .pipe(rxjs_1.catchError(this.handleError.handleError('Consulta Estudiante')));
    };
    CursoService.prototype.post = function (estudiante) {
        var _this = this;
        return this.http.post(this.baseUrl + "/Estudiante", estudiante)
            .pipe(rxjs_1.tap(function (_) { return _this.handleError.log('Estudiante registrado correctamente.'); }), rxjs_1.catchError(this.handleError.handleError('Registrar Estudiante')));
    };
    CursoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CursoService);
    return CursoService;
}());
exports.CursoService = CursoService;
