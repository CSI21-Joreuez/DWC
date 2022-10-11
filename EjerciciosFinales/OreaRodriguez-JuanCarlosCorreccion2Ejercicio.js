var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Libro = /** @class */ (function () {
        function Libro(titulo, autor) {
            this.titulo = titulo;
            this.autor = autor;
        }
        return Libro;
    }());
    var Revista = /** @class */ (function (_super) {
        __extends(Revista, _super);
        function Revista(tematica, titulo, autor, numero) {
            var _this = this;
            _this = _super.call(this, titulo, autor) || this,
                _this.tematica = tematica;
            _this.autor = autor;
            _this.titulo = titulo;
            _this.autor = autor;
            _this.numero = numero;
            return _this;
        }
        Revista.prototype.Archivar = function () {
            return "arhivado";
        };
        return Revista;
    }(Libro));
    var Cuaderno = /** @class */ (function () {
        function Cuaderno(cientifica, universidad, mes, anio, autor, titulo) {
            this.cientifica = cientifica;
            this.universidad = universidad;
            this.mes = mes;
            this.anio = anio;
            this.titulo = titulo;
            this.autor = autor;
        }
        Cuaderno.prototype.Archivar = function () {
            return "arhivado";
        };
        return Cuaderno;
    }());
    var cuadernillo = new Cuaderno(true, "oxford", "junio", 2019, "Juan Carlos", "ejerciciosDeAngular");
    var elquisquilloso = new Revista("Actualidad", "Luna", "LoveGood", 236);
    console.log(elquisquilloso.Archivar());
    console.log(cuadernillo.Archivar());
})();
