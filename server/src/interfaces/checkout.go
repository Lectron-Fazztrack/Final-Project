package interfaces

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
)

type CoRepo interface {
	FindAll() (*models.Checkouts, error)
	GetId(email string) (*models.User, error)
	GetProductId(id int) (*models.Product, error)
	FindData(id string) (*models.Checkouts, error)
	Save(data *models.Cart, email string) (*models.Checkout, error)
	FindCoId(id int) (*models.Checkout, error)
	// AddCart(data *models.Cart, id int) (*models.Cart, error)
}

type CoService interface {
	GetAll(email string) *libs.Response
	Checkout(data *models.Cart, email string) (*libs.Response, error)
	// AddCart(data *models.Cart, id int) *libs.Response
}
