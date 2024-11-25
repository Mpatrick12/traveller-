


To run this API, do the following:
create .env with the following code (update credentials). Make sure to create .env in the root of the project,

<code>
    DATABASE="mongodb+srv://<username>:<password>@<clustername>.wf7c8.mongodb.net/<database name>?retryWrites=true&w=majority"
    PORT=5000
    JWT_SECRET=Your_jwt_Secret_key
    BRAINTREE_MERCHANT_ID=Your_braintreemerchant_id
    BRAINTREE_PUBLIC_KEY=Your_braintree_account_public_key
    BRAINTREE_PRIVATE_KEY=Your_braintree_account_private_key
</code>

## How to Create Credentials 

### For Database

1. Goto Mongodb and create an Account [https://www.mongodb.com/products/platform/cloud](https://www.mongodb.com/products/platform/cloud).

2. Create a new Project named **"Traveller for life "**.
3. Create a new Cluster (M0 Free Version for testing/development) under Traveller for life Project and click on deploy cluster.
4. Fill/copy the required credentials and click on create user.
5. click on choose a connection method.
6. you will get multiple option to connect to database. you can use any as you like.
7. if you dant want to do much, click on drivers>> select driver (Nodejs) >> copy the connection string and paste it into the .env file in front of Database = __________.




### For JWT_Secret

1. use some random Character (just for fun, not recommended in-case of Production)

Then run the following commands to start up the api.

<code>
    cd AwareWeGo-Api
    npm install
    npm start


    
