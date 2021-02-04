// alert("hello");
// console.log("connected");

var abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_pname",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "_price",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "_quantity",
                "type": "int256"
            }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_cname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_daddress",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "_pid",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "_quantity",
                "type": "int256"
            }
        ],
        "name": "placeOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "reginsterProducer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_oid",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "_status",
                "type": "string"
            }
        ],
        "name": "updateOrderStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_pid",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "_newPrice",
                "type": "int256"
            }
        ],
        "name": "updatePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_pid",
                "type": "int256"
            }
        ],
        "name": "getProductById",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalProduct",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "name": "orders",
        "outputs": [
            {
                "internalType": "int256",
                "name": "id",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "product_id",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "quantity",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "customer_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "delivery_address",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "customer_address",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "producers",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "name": "products",
        "outputs": [
            {
                "internalType": "int256",
                "name": "id",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "price",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "quantity",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "product_name",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "producer_address",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalOrder",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalProduct",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_oid",
                "type": "int256"
            }
        ],
        "name": "trackOrderById",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

var address = "0x63f2c36b7fab4b7227fd08c9da8942447b2d45dc";

web3 = new Web3(web3.currentProvider);
var contract = new web3.eth.Contract(abi, address);
console.log("blockchain connected")


$(document).ready(function () {

    // contract.methods.fetch(1).call().then(function (data) {
    //     for (var i = 0; i < 3; i++) {
    //         var r = "<tr><th>2</th><td>Product</td><td>1000</td><td><button type=\"button\" class=\"btn btn-secondary btn-sm\">Order</button></td></tr>";
    //         console.log(r);
    //         $("#_product_table").find('tbody').append(r);
    //     }
    // })

    contract.methods.getTotalProduct().call().then(function(totalProduct){
        console.log("totalProduct : "+totalProduct);
        var local_id=1;
        for(var i=1; i<=totalProduct; i++){
            contract.methods.getProductById(i).call().then(function(productDetails){
                console.log(productDetails);
                var row = "<tr><th>"+local_id+"</th><td>"+productDetails[2]+"</td><td>"+productDetails[0]+"</td><td>"+productDetails[1]+"</td><td><button type=\"button\" class=\"btn btn-secondary btn-sm\" onclick=\"productOrderClick("+local_id+")\">Order</button></td></tr>";
                $("#_product_table").find('tbody').append(row);
                local_id++;
            });
        }
    });


});

function productOrderClick(productId) {
    alert(productId);
}