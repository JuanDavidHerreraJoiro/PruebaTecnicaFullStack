"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BotonMenuComponent = void 0;
var core_1 = require("@angular/core");
var BotonMenuComponent = /** @class */ (function () {
    function BotonMenuComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.botones = [];
        this.onSelect = new core_1.EventEmitter();
    }
    BotonMenuComponent.prototype.ngOnInit = function () {
    };
    BotonMenuComponent.prototype.redireccionar = function (url) {
        //this.router.navigate([url]);
        console.log(url);
    };
    BotonMenuComponent.prototype.emitir = function (boton) {
        var _this = this;
        if (boton.componente) {
            var dialogRef = this.dialog.open(boton.componente, { data: boton.objeto });
            dialogRef.afterClosed()
                .subscribe(function (result) {
                if (result) {
                    _this.onSelect.emit(result);
                }
            });
        }
    };
    __decorate([
        core_1.Input()
    ], BotonMenuComponent.prototype, "botones");
    __decorate([
        core_1.Output()
    ], BotonMenuComponent.prototype, "onSelect");
    BotonMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-boton-menu',
            templateUrl: './boton-menu.component.html',
            styles: []
        })
    ], BotonMenuComponent);
    return BotonMenuComponent;
}());
exports.BotonMenuComponent = BotonMenuComponent;
