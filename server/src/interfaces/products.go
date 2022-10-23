package interfaces

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
)

type ProductRepo interface {
	Save(data *models.Product) (*models.Product, error)
	Update(data *models.Product, id string) (*models.Product, error)
	Delete(id string) (*models.Products, error)

	FindAll(limit, offset int) (*models.Products, error)
	FindById(id string) (*models.Product, error)
	FindByType(types string) (*models.Products, error)
}

type ProductService interface {
	Add(data *models.Product) *libs.Response
	Update(data *models.Product, id string) *libs.Response
	Delete(id string) *libs.Response

	GetAll(limit, offset int) *libs.Response
	GetId(id string) *libs.Response
	GetType(types string) *libs.Response
}
