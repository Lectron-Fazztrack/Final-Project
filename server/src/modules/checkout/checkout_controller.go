package checkout

import (
	"encoding/json"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"github.com/gin-gonic/gin"
)

type co_ctrl struct {
	svc interfaces.CoService
}

func NewCtrl(reps interfaces.CoService) *co_ctrl {
	return &co_ctrl{svc: reps}
}

func (re *co_ctrl) Histories(c *gin.Context) {
	claim_user, exist := c.Get("email")
	if !exist {
		libs.New("claim user is not exist", 400, true)
		c.Abort()
	}
	email := claim_user.(string)
	re.svc.GetAll(email).Send(c)
}

func (re *co_ctrl) Checkout(c *gin.Context) {
	claim_user, exist := c.Get("email")
	if !exist {
		libs.New("claim user is not exist", 400, true)
		c.Abort()
	}
	email := claim_user.(string)

	var data models.Cart
	err := json.NewDecoder(c.Request.Body).Decode(&data)
	if err != nil {
		libs.New(err.Error(), 400, true)
		c.Abort()
	}
	res, err := re.svc.Checkout(&data, email)
	if err != nil {
		libs.New("error checkout", 400, true)
		c.Abort()
	}

	res.Send(c)
}

// func (re *co_ctrl) AddCart() (c *gin.Context) {
// 	ids := c.Param("id")
// 	id, _ := strconv.Atoi(ids)

// 	fmt.Println(id)

// }
