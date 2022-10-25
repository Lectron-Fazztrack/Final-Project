package checkout

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/interfaces"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
)

type co_service struct {
	co_repo interfaces.CoRepo
}

func NewService(reps interfaces.CoRepo) *co_service {
	return &co_service{reps}
}

func (re *co_service) GetAll(email string) *libs.Response {
	res, err := re.co_repo.GetId(email)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}

	data, err := re.co_repo.FindData(res.UserId)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(data, 200, false)
}

func (re *co_service) Checkout(data *models.Checkout, email string) *libs.Response {
	res, err := re.co_repo.GetId(email)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	data.UserId = res.UserId

	result, err := re.co_repo.Save(data)
	if err != nil {
		return libs.New(err.Error(), 400, true)
	}
	return libs.New(result, 201, false)
}
