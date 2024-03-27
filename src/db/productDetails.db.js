
const createProductTable=`CREATE TABLE IF NOT EXISTS localDB.product(
    id INT PRIMARY KEY NOT NULL,
    productName VARCHAR(32) NOT NULL,
    productImageName VARCHAR(32) NOT NULL,
    productImageURL VARCHAR(32) NOT NULL,
    brandName VARCHAR(32) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTMEP,
    updated_at TIMESTAMP NOT NULL CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP   
)`


module.exports=createProductTable