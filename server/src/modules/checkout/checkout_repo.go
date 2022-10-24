package checkout

import (
	"errors"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"gorm.io/gorm"
)

type co_repo struct {
	db *gorm.DB
}

func NewRepo(db *gorm.DB) *co_repo {
	return &co_repo{db}
}

func (r *co_repo) FindAll() (*models.Checkouts, error) {
	var datas *models.Checkouts
	result := r.db.Model(&datas).Preload("User").Find(&datas)
	if result.Error != nil {
		return nil, errors.New("failed obtain datas")
	}

	return datas, nil
}

func (r *co_repo) FindData(id string) (*models.Checkouts, error) {
	var datas *models.Checkouts
	result := r.db.Where("user_id = ?", id).Find(&datas)
	if result.Error != nil {
		return nil, errors.New("failed obtain datas")
	}

	return datas, nil
}

func (r *co_repo) GetId(email string) (*models.User, error) {
	var data *models.User

	result := r.db.Where("email = ?", email).Find(&data).Limit(1)
	if result.Error != nil {
		return nil, errors.New("invalid user_id")
	}
	return data, nil
}

func (r *co_repo) GetProductId(id int) (*models.Product, error) {
	var prod *models.Product
	var prods *models.Products

	res := r.db.Model(&prods).Where("product_id = ?", id).Find(&prod)
	if res.Error != nil {
		return nil, errors.New("invalid id")
	}

	return prod, nil
}

func (r *co_repo) Save(data *models.Cart, email string) (*models.Checkout, error) {
	tx := r.db.Begin()
	var checkout models.Checkout

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	if tx.Where("user.email = ?", email).Find(&checkout); checkout.CheckoutId == 0 {
		checkout.UserId = email
		if err := tx.Create(&checkout).Error; err != nil {
			tx.Rollback()
			return nil, err
		}
	}

	data.CheckoutId = checkout.CheckoutId
	if err := tx.Create(data).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	tx.Commit()
	return &checkout, nil
}

func (r *co_repo) FindCoId(id int) (*models.Checkout, error) {
	var datas *models.Checkouts
	var data *models.Checkout

	result := r.db.Model(&datas).Where("checkout_id = ?", id).Find(&data)
	if result.Error != nil {
		return nil, errors.New("failed obtain datas")
	}

	return data, nil
}

// func (r *co_repo) AddCart(data *models.Cart, id int) (*models.Cart, error) {

// }
