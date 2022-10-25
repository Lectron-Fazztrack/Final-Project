# LECTRON - FINAL PROJECT
## <div align="center"> ERD (Entity Relation Database) </div>
<p align="center">
<img width="445" alt="logo" src="https://user-images.githubusercontent.com/99460188/197575972-f1f7fdb4-c66e-4dac-a4e9-35cbc380c572.png">
</p>

## <div align="center"> Table Spesification
## USER
<img width="493" alt="user" src="https://user-images.githubusercontent.com/99460188/197533493-8d6c212a-9ad5-4a65-8bee-24a42e333dde.PNG">


## CART
<img width="492" alt="cart" src="https://user-images.githubusercontent.com/99460188/197605683-f0c71111-ba6c-439b-bf38-df1140c6eb0f.PNG">


## MIGRATION
<img width="498" alt="migration" src="https://user-images.githubusercontent.com/99460188/197534338-506f39cf-47b5-4ecf-94f7-0a863d896432.PNG">


## PRODUCT
<img width="494" alt="product" src="https://user-images.githubusercontent.com/99460188/197534329-bca0b09d-a78a-4d75-bd8c-ff8fa9625a88.PNG">


## CHECK OUT
<img width="493" alt="check out" src="https://user-images.githubusercontent.com/99460188/197534343-8ed97647-fec7-4e6e-8fbd-502cfb04fd79.PNG">


## REVIEW
<img width="498" alt="review" src="https://user-images.githubusercontent.com/99460188/197534324-d087297c-76db-4f4d-bbe9-57475aa19861.PNG">
</div>

# Some commands you should know to run this application
``` bash
1. go run . serve // to run the app/server
2. go run . migrate -u // for database migration
   go run . migrate -d // for database rollback
3. go run . seed // to seeding data Role admin if you want :

email : "admin@gmail.com"
password : admin12345678
```


# :hammer_and_wrench: Installation Steps

:one: Make root folder in your Gopath
``` bash
github.com/Lectron-Fazztrack
```
:two: Chosee project name "Final-Project"

:three: Clone the repository inside the folder that was created "github.com/Lectron-Fazztrack"
``` bash
git clone https://github.com/Lectron-Fazztrack/Final-Project.git
```

:four: Intstall dependencies
``` bash
go mod tidy
```

:five: Add Env
``` bash
DBHOST = DB Host
DBUSER = DB User
DBPASS = DB Password
DBNAME = DB Name
JWT_KEYS = JWT Keys
DBSSL = DB SSL

CLOUD_NAME = Cloud Name
CLOUD_KEY = API Key
CLOUD_SEC = API Secret
```

:six: Database Migration and Rollback
``` bash
go run . migrate --up // database migrate table

go run . migrate --down //rollback the database
```


:seven: Seeding data admin
``` bash
go run . seed
```
:arrow_right: PURPOSE TO LOGIN AS ADMIN'S ROLE
{
    "email" : "admin@gmail.com",
    "password" : "admin12345678"
}

:eight: Run the app
```bash
go run . serve
```


# :gear: You are all set
==================================================

# :link: ROUTE test

# :pushpin: Authentication Register
``` route.POST("/register", ctrl.Register) ```

:wrench: Create new Admin :
```bash
{
    "name": "<your name>",
    "email": "<your email>",
    "role": "<admin>",
    "password": "<your password>",
    "addres": "<your address>",
    "phone": "<your phone number>",
    "gender": "<male/female>"
}
```

:heavy_check_mark: Respond :
   ```bash
{

"status": "OK",
    "isError": false,
    "data": {
        "id": "<uuid>",
        "name": "<name>",
        "email": "<email>",
        "role": "<admin>",
        "Password": "<generate password>",
        "gender": "<male/female>",
        "date": "<date>",
        "created_at": "<created time>",
        "updated_at": "<updated time>"
    }
}

```
:wrench: Create new User :
```bash

{
    "name": "<your name>", 
    "email": "<your email>", 
    "password": "<your password>", 
    "addres": "<your address>", 
    "phone": "<your phone number>", 
    "gender": "<male/female>"
}

```

:heavy_check_mark: Respond :
  ```bash 
{
    "status": "OK",
    "isError": false,
    "data": {
        "id": "<uuid>",
        "name": "<name>",
        "email": "<email>",
        "role": "<user>",
        "Password": "<generate password>",
        "gender": "<male/female>",
        "date": "<date>",
        "created_at": "<created time>",
        "updated_at": "<update time>"
    }
}
```


:crossed_swords: Request Body :
```bash

{
    "name": "<your name>", (STRING)
    "email": "<your email>", (STRING)
    "role": "<admin>", (STRING)
    "password": "<your password>", (STRING)
    "addres": "<your address>", (STRING)
    "phone": "<your phone number>", (INT)
    "gender": "<male/female>" (STRING)
}

```
==================================================

# :pushpin: Authentication Login
``` route.POST("/login", ctrl.Login) ```

:wrench: Proses Login
```bash
{
    "email" : "<your email>",
    "password" : "<your password>"
}
```

:heavy_check_mark: Respond :
```bash

{
    "status": "OK",
    "isError": false,
    "data": {
        "token": "<your token>"
    }
}
```

:crossed_swords: Request Body :
```bash

{
    "email" : <your email> (STRING),
    "password" : <your password> (STRING)
}
```
==================================================

# :pushpin: Product  
:heavy_plus_sign: Add Product
```bash
route.POST("", middleware.CheckAuth(), middleware.CheckAuthor(), middleware.Cloudinary(), ctrl.AddProduct)
```
:infinity: Update Product
```bash
route.PUT("/:id", middleware.CheckAuth(), middleware.CheckAuthor(), middleware.Cloudinary(), ctrl.UpdateProduct)
```
:x: Delete Product
```bash
route.DELETE("/:id", middleware.CheckAuth(), middleware.CheckAuthor(), ctrl.DeleteProduct)
```
:registered: Get All
```bash
route.GET("", ctrl.GetAllProduct)
```
:registered: Get By Id
```bash
route.GET("/:id", ctrl.GetById)
```
 
:registered: Get By Type
```bash
route.GET("/types/:type", ctrl.GetByType)
```

:crossed_swords: Request Body :
```bash

{
    "name" : "<product name>", (STRING)
    "image" : "<product image>", (STRING)
    "stock" : "<product stock>", (STRING)
    "telphone" : "<your password>", (INT)
    "price" : "<product price>", (INT)
    "type" : "<product type>", (INT)
    "sold" : "<product sold>" (STRING),
    "description" : "<description product>" (STRING)
}

```
==================================================
# :pushpin: Cart

:crossed_swords: Request Body :
```bash

{
   "product_id" : "<rate>", (INT)
   "amount" : "<comment>" (INT)
}
```
==================================================
# :pushpin: Checkout and History

:shopping_cart: ``` route.POST("/checkout", ctrl.Checkout) ```

:clipboard: ``` route.GET("/histories", ctrl.Histories) ```

:crossed_swords: Request Body :
```bash

{
    "checkout_name" : "<checkout name>", (STRING)
    "product_id" : "<product id>", (INT)
    "deliv_address" : "<delivery address>", (STRING)
    "telphone" : "<your password>", (INT)
    "notes" : "<notes>", (STRING)
    "discount" : "<product discount>", (INT)
    "amount" : "<amount>", (INT)
    "total" : "<total>", (INT)
    "status" : "<status product>", (STRING)
    "payment" : "<payment>" (STRING)
}

```
==================================================

# :pushpin: Review
:heavy_plus_sign: Add Review
```bash
route.POST("/review", middleware.CheckAuth(), ctrl.PostReview)
```

:registered: Get By Type
```bash
route.GET("/review/:id", ctrl.GetReview)
```
:crossed_swords: Request Body :
```bash

{
  "rate" : "<rate>", (INT)
  "comment" : "<comment>" (STRING)
}

```

==================================================

==================================================

# :pushpin: Deployment
:heavy_plus_sign: Deployment on heroku
```bash
heroku container:login
heroku create <app-backend-name>
heroku create <app-frontend-name>
heroku git:remote -a <app-backend-name>
heroku git:remote -a <app-frontend-name>
heroku container:push backend --app <app-backend-name>
heroku container:release backend --app <app-backend-name>
heroku container:push frontend --app <app-frontend-name>
heroku container:release frontend --app <app-frontend-name>
```

==================================================

