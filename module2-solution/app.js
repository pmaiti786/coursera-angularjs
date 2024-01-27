(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var tbc = this;

        tbc.items = ShoppingListCheckOffService.getItems();

        tbc.buyItem = function (item) {
            ShoppingListCheckOffService.buyItems(item);
            tbc.items = ShoppingListCheckOffService.getItems();
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var abc = this;

        abc.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var items = [
            { id: 1, name: "oranges", quantity: 4 },
            { id: 2, name: "chocolates", quantity: 8 },
            { id: 3, name: "eggs", quantity: 16 },
            { id: 4, name: "donuts", quantity: 32 },
            { id: 5, name: "apple", quantity: 64 }];

        var boughtItems = [];

        service.buyItems = function (item) {
            items = items.filter(function (element) {
                return element.id != item.id;
            });
            boughtItems.push(item);
        }

        service.getItems = function () {
            return items;
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }
    }

})();