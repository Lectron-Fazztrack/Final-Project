package products

import (
	"errors"
	"strings"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"gorm.io/gorm"
)

type prod_repo struct {
	db *gorm.DB
}

func NewRepo(db *gorm.DB) *prod_repo {
	return &prod_repo{db}
}

func (r *prod_repo) FindAll(limit, offset int) (*models.Products, error) {
	var datas *models.Products
	result := r.db.Model(&datas).Limit(limit).Offset(offset).Find(&datas)
	if result.Error != nil {
		return nil, errors.New("failed obtain datas")
	}
	return datas, nil
}
func (r *prod_repo) FindById(id string) (*models.Products, error) {
	var datas *models.Products

	result := r.db.First(&datas, "product_id = ?", id)
	if result.Error != nil {
		return nil, errors.New("data not found!")
	}
	return datas, nil
}
func (r *prod_repo) FindByType(types string) (*models.Products, error) {
	var datas *models.Products

	params := strings.ToLower((types))
	result := r.db.Where("LOWER(type) LIKE ?", "%"+params+"%").Find(&datas)
	if result.Error != nil {
		return nil, errors.New("data not found!")
	}
	return datas, nil
}

func (r *prod_repo) Save(data *models.Product) (*models.Product, error) {

	result := r.db.Create(data)
	if result.Error != nil {
		return nil, errors.New("failled to obtain data")
	}

	return data, nil
}
