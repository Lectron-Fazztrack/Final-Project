package users

import (
	"errors"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"gorm.io/gorm"
)

type user_repo struct {
	db *gorm.DB
}

func NewRepo(db *gorm.DB) *user_repo {
	return &user_repo{db}
}

func (re *user_repo) FindByEmail(email string) (*models.User, error) {
	var data *models.User
	// var datas *models.Users

	res := re.db.Where("email = ?", email).Find(&data)
	if res.Error != nil {
		return nil, errors.New("failed to find data")
	}
	if res.RowsAffected == 0 {
		return nil, errors.New("email not found")
	}
	return data, nil
}

func (re *user_repo) UpdateUser(data *models.User, email string) (*models.User, error) {
	var datas *models.User

	re.db.First(&datas, "email = ?", email)
	if datas.Image != "" {
		libs.CloudDelete(datas.Image)
	}

	res := re.db.Where("LOWER(email) = ?", email).Updates(&data)

	if res.Error != nil {
		return nil, errors.New("failed to update data")
	}
	return data, nil
}
