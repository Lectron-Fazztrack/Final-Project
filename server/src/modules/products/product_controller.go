package products

import (
	"fmt"
	"strconv"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/schema"
)

type prod_ctrl struct {
	svc interfaces.ProductService
}

func NewCtrl(reps interfaces.ProductService) *prod_ctrl {
	return &prod_ctrl{svc: reps}
}

func (re *prod_ctrl) GetAllProduct(c *gin.Context) {
	v := c.Request.URL.Query().Get("limit")
	limit, _ := strconv.Atoi(v)

	val := c.Request.URL.Query().Get("offset")
	offset, _ := strconv.Atoi(val)

	re.svc.GetAll(limit, offset).Send(c)

}
func (re *prod_ctrl) GetById(c *gin.Context) {
	prodId := c.Param("id")
	re.svc.GetId(prodId).Send(c)
}

func (re *prod_ctrl) GetByType(c *gin.Context) {
	types := c.Param("type")
	re.svc.GetType(types).Send(c)

}

func (re *prod_ctrl) AddProduct(c *gin.Context) {
	c.Writer.Header().Set("Content-Type", "multipart/form-data")

	var decoder = schema.NewDecoder()
	var data models.Product

	file, exist := c.Get("image")
	if !exist {
		libs.New("image is not exist", 400, true)
		c.Abort()
	}
	//file upload
	image := file.(string)
	data.Image = image
	fmt.Println(data.ProductName)
	err := decoder.Decode(&data, c.Request.PostForm)
	if err != nil {
		libs.New(err.Error(), 400, true)
		c.Abort()

	}
	re.svc.Add(&data).Send(c)
}
func (re *prod_ctrl) UpdateProduct(c *gin.Context) {
	c.Writer.Header().Set("Content-Type", "multipart/form-data")

	id := c.Param("id")

	var decoder = schema.NewDecoder()
	var data models.Product

	file, exist := c.Get("image")
	if !exist {
		libs.New("image is not exist", 400, true)
		c.Abort()
	}
	//file upload
	image := file.(string)
	data.Image = image
	fmt.Println(data.ProductName)
	err := decoder.Decode(&data, c.Request.PostForm)
	if err != nil {
		libs.New(err.Error(), 400, true)
		c.Abort()

	}
	re.svc.Update(&data, id).Send(c)
}

func (re *prod_ctrl) DeleteProduct(c *gin.Context) {
	id := c.Param("id")
	re.svc.Delete(id).Send(c)

}