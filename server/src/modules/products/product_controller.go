package products

import (
	"encoding/json"
	"strconv"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"github.com/gin-gonic/gin"
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
	var data models.Product

	file, exist := c.Get("image")
	if !exist {
		libs.New("claim user is not exist", 400, true)
		c.Abort()
	}

	image := file.(string)
	data.Image = image

	err := json.NewDecoder(c.Request.Body).Decode(&data)
	if err != nil {
		libs.New(err.Error(), 400, true)
		c.Abort()

	}
	re.svc.Add(&data).Send(c)
}
