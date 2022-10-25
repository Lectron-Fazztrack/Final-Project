# LECTRON - FINAL PROJECT

# Some commands you should know to run this application
``` bash
1. go run . serve // to run the app/server
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

:four: Checkout Branch
``` bash
git checkout front-end
```

:five: Add Env
``` bash
REACT_APP_BASE_URL=http://localhost:8080/
```

:six: Run the app
```bash
go run . serve
```


# :gear: You are all set
==================================================
# :link: RESTfun endpoint
# :pushpin: HOME

:infinity: Home : GET /pages/home
```bash
<Route exact path="/" element={<Home />} />
```
==================================================
# :pushpin: Authentication

:wrench: POST /register
```bash
<Route exact path="/register" element={<Register />} />
```

:wrench: POST /login
```bash
<Route exact path="/login" element={<Login />} />
```
==================================================

# :pushpin: Product  
:heavy_plus_sign: Product : POST /products
```bash
<Route exact path="/products" element={<Product />} />
```
:registered: Detail Product : GET /products/detail/:id
``` bash
<Route exact path="/products/detail/:id" element={<DetailProduct />} />
```
==================================================
# :pushpin: Review  
:heavy_plus_sign: Review : POST /review

:registered: Review : GET /review/id

