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
        this._refrescar$ = new rxjs_1.Subject();
        this.baseUrl = environment_1.environment.baseUrl;
    }
    Object.defineProperty(CursoService.prototype, "refrescar$", {
        get: function () {
            return this._refrescar$;
        },
        enumerable: false,
        configurable: true
    });
    CursoService.prototype.get = function () {
        return this.http.get(this.baseUrl + "/Curso")
            .pipe(rxjs_1.catchError(this.handleError.handleError('Consulta Curso')));
    };
    CursoService.prototype.post = function (curso) {
        var _this = this;
        return this.http.post(this.baseUrl + "/Curso", curso)
            .pipe(rxjs_1.map(function (resp) {
            _this._refrescar$.next();
            return resp;
        }), rxjs_1.catchError(function (error) { return rxjs_1.of(error); }));
    };
    CursoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CursoService);
    return CursoService;
}());
exports.CursoService = CursoService;
