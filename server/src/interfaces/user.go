package interfaces

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
)

type UserRepo interface {
	UpdateUser(data *models.User, email string) (*models.User, error)
	FindByEmail(email string) (*models.User, error)
}

type UserService interface {
	Update(data *models.User, email string) *libs.Response
}
