package auth

import (
	"encoding/json"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"github.com/gin-gonic/gin"
)

type auth_ctrl struct {
	repo interfaces.AuthService
}

func NewCtrl(reps interfaces.AuthService) *auth_ctrl {
	return &auth_ctrl{reps}
}

func (a *auth_ctrl) Login(c *gin.Context) {
	var data models.User

	err := json.NewDecoder(c.Request.Body).Decode(&data)
	if err != nil {
		libs.New(err.Error(), 401, true)
		c.Abort()
	}

	a.repo.SignIn(data).Send(c)
}

func (a *auth_ctrl) Register(c *gin.Context) {
	var data models.User

	err := json.NewDecoder(c.Request.Body).Decode(&data)
	if err != nil {
		libs.New(err.Error(), 401, true)
		c.Abort()
	}
	a.repo.SignUp(&data).Send(c)
}
