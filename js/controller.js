'use strict';

// all products and products inside cart
function shopController($scope, DataService) {

    // product data
    $scope.products = [
        {
            "id": 1,
            "user_id": 1,
            "product_name": "Phone",
            "description": "iPhone 6s +\r\n",
            "image_url": "images\/iPhon.png",
            "price": 800,
            "created": "2016-06-18T12:33:59+0000",
            "modified": "2016-06-18T12:33:59+0000"
        },
        {
            "id": 2,
            "user_id": 2,
            "product_name": "Headphone",
            "description": "BeatsByDre",
            "image_url": "images\/headphne.png",
            "price": 100,
            "created": "2016-06-18T12:36:01+0000",
            "modified": "2016-06-18T12:36:01+0000"
        },
        {
            "id": 3,
            "user_id": 1,
            "product_name": "glass",
            "description": "Glass of wine",
            "image_url": "images\/new.png",
            "price": 35,
            "created": "2016-06-18T19:13:26+0000",
            "modified": "2016-06-18T19:25:05+0000"
        },
        {
            "id": 4,
            "user_id": 2,
            "product_name": "TV",
            "description": "Samsung32",
            "image_url": null,
            "price": 100,
            "created": "2016-06-19T12:25:44+0000",
            "modified": "2016-06-19T12:25:44+0000"
        }
    ];
    
    $scope.cart = DataService.cart;

    
}
