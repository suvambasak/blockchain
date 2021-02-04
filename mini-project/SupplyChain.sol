pragma solidity >=0.7.0 <0.8.0;

contract MyContract{
    // Producer list [address and name].
    mapping(address=>string) public producers;
    
    // Products details.
    int public totalProduct=0;
    struct product{
        int id;
        int price;
        int quantity;
        string product_name;
        address producer_address;
    }
    mapping(int=>product) public products;
    
    // Order details
    int public totalOrder=0;
    struct order{
        int id;
        int product_id;
        int quantity;
        string customer_name;
        string status;
        string delivery_address;
        address customer_address;
    }
    mapping(int=>order) public orders;
    
    
    // register producer authentication.
    modifier reginsterProducerAuth(){
        require(bytes(producers[msg.sender]).length == 0);
        _;
    }
    
    // Add product authentication.
    modifier addProductAuth(){
        require(bytes(producers[msg.sender]).length > 0);
        _;
    }
    
    
    function reginsterProducer(string memory _name) public reginsterProducerAuth{
        producers[msg.sender] = _name;
    }
    
    function addProduct(string memory _pname, int _price, int _quantity) public addProductAuth{
        totalProduct += 1;
        products[totalProduct] = product(totalProduct, _price, _quantity, _pname, msg.sender);
    }
    
    function updatePrice(int _pid, int _newPrice) public{
        require(products[_pid].producer_address == msg.sender);
        products[_pid].price = _newPrice;
    }
    
    function placeOrder(string memory _cname, string memory _daddress, int _pid, int _quantity) public{
        require(products[_pid].quantity >= _quantity);
        
        totalOrder += 1;
        orders[totalOrder] = order(totalOrder,_pid,_quantity,_cname,"Placed",_daddress,msg.sender);
        products[_pid].quantity -= _quantity;
    }
    
    function trackOrderById(int _oid) view public returns(string memory){
        require(orders[_oid].customer_address == msg.sender);
        return (orders[_oid].status);
    }
    
    function updateOrderStatus(int _oid, string memory _status) public{
        require(products[orders[_oid].product_id].producer_address == msg.sender);
        orders[_oid].status = _status;
    }
    
    function getTotalProduct() view public returns(int){
        return totalProduct;
    }
    
    function getProductById(int _pid) view public returns(int, int, string memory){
        require(_pid<=totalProduct);
        return (products[_pid].price,products[_pid].quantity,products[_pid].product_name);
    }
}