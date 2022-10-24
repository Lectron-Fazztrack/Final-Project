package users

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/middleware"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func New(rt *gin.Engine, db *gorm.DB) {
	repo := NewRepo(db)
	svc := NewService(repo)
	ctrl := NewCtrl(svc)

	route := rt.Group("")
	{
		route.PUT("/update", middleware.CheckAuth(), middleware.Cloudinary(), ctrl.Update)
	}

}
