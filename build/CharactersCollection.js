"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharacteresCollection = /** @class */ (function (_super) {
    __extends(CharacteresCollection, _super);
    function CharacteresCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharacteresCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharacteresCollection.prototype.compare = function (leftIndex, rigthIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase());
    };
    CharacteresCollection.prototype.swap = function (leftIndex, rigthIndex) {
        var characteres = this.data.split("");
        var leftHand = characteres[leftIndex];
        characteres[leftIndex] = characteres[rigthIndex];
        characteres[rigthIndex] = leftHand;
        this.data = characteres.join("");
    };
    return CharacteresCollection;
}(Sorter_1.Sorter));
exports.CharacteresCollection = CharacteresCollection;
