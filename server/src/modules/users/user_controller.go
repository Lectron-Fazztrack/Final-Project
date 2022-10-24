package users

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/schema"
)

type user_ctrl struct {
	svc interfaces.UserService
}

func NewCtrl(reps interfaces.UserService) *user_ctrl {
	return &user_ctrl{svc: reps}
}

func (re *user_ctrl) Update(c *gin.Context) {
	c.Writer.Header().Set("Content-Type", "multipart/form-data")
	var decoder = schema.NewDecoder()
	var data models.User

	claim_user, exist := c.Get("email")
	if !exist {
		libs.New("claim user is not exist", 400, true)
		c.Abort()
	}
	email := claim_user.(string)

	file, exist := c.Get("image")
	if !exist {
		libs.New("file not exist", 400, true)
		c.Abort()
	}

	//file upload
	image := file.(string)
	data.ImageUser = image

	err := decoder.Decode(&data, c.Request.PostForm)
	if err != nil {
		libs.New(err.Error(), 400, true)
		c.Abort()

	}

	re.svc.Update(&data, email).Send(c)
}
