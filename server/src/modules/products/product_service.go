package products

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
)

type prod_servcie struct {
	prod_repo interfaces.ProductRepo
}

func NewService(reps interfaces.ProductRepo) *prod_servcie {
	return &prod_servcie{reps}
}

func (re *prod_servcie) GetAll(limit, offset int) *libs.Response {
	data, err := re.prod_repo.FindAll(limit, offset)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(data, 200, false)
}
func (re *prod_servcie) GetId(id string) *libs.Response {
	data, err := re.prod_repo.FindById(id)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(data, 200, false)
}
func (re *prod_servcie) GetType(types string) *libs.Response {
	data, err := re.prod_repo.FindByType(types)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(data, 200, false)
}
func (re *prod_servcie) Add(data *models.Product) *libs.Response {
	result, err := re.prod_repo.Save(data)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(result, 201, false)
}
func (re *prod_servcie) Update(data *models.Product, id string) *libs.Response {
	result, err := re.prod_repo.Update(data, id)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(result, 201, false)
}

func (re *prod_servcie) Delete(id string) *libs.Response {
	data, err := re.prod_repo.Delete(id)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(data, 200, false)
}
