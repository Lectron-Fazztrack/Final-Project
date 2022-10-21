package routers

import (
	"errors"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/modules/auth"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/modules/users"
	"github.com/gin-gonic/gin"
)

func New() (*gin.Engine, error) {
	mainRoute := gin.Default()

	db, err := database.New()
	if err != nil {
		return nil, errors.New("failed init database")
	}
	users.New(mainRoute, db)
	auth.New(mainRoute, db)

	return mainRoute, nil
}
