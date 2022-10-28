package interfaces

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
)

type AuthRepo interface {
	FindByEmail(username string) (*models.User, error)
	Register(data *models.User) (*models.User, error)
	ForgetPassword(email string, data *models.User)(*models.User, error)
}

type AuthService interface {
	SignIn(body models.User) *libs.Response
	SignUp(body *models.User) *libs.Response
	ForgetPassword(email string, data *models.User)*libs.Response
}
