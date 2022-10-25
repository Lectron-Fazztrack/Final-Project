package auth

import (
	"errors"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"gorm.io/gorm"
)

type auth_repo struct {
	db *gorm.DB
}

func NewRepo(db *gorm.DB) *auth_repo {
	return &auth_repo{db}
}

func (re *auth_repo) FindByEmail(email string) (*models.User, error) {
	var data *models.User
	var datas *models.Users

	res := re.db.Model(&datas).Where("email = ?", email).Find(&data)
	if res.Error != nil {
		return nil, errors.New("failed to find data")
	}
	if res.RowsAffected == 0 {
		return nil, errors.New("email not found")
	}
	return data, nil
}

func (re *auth_repo) Register(data *models.User) (*models.User, error) {
	var datas *models.Users

	res := re.db.Model(&datas).Where("LOWER(email) = ?", data.Email).Find(&data)
	if res.Error != nil {
		return nil, errors.New("failed to find data")
	}
	if res.RowsAffected > 0 {
		return nil, errors.New("email registered, go to login")
	}

	r := re.db.Model(&data).Create(data)
	if r.Error != nil {
		return nil, errors.New("failled to obtain data")
	}
	return data, nil
}

func (re *auth_repo) ForgetPassword(email string, data *models.User) (*models.User, error) {
	var user_in_db models.User
	res := re.db.Where("email = ?", email).Find(&user_in_db)
	if res.Error != nil {
		return nil, errors.New("failed to find data")
	}
	if res.RowsAffected == 0 {
		return nil, errors.New("email not found")
	}
	update_pw, _ := libs.HashPassword(data.Password)
	res.Update("password", update_pw)
	return data, nil
}
