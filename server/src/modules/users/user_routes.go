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

	route := rt.Group("/user").Use(middleware.CheckAuth())
	{
		route.GET("", ctrl.GetAll)
		route.POST("", ctrl.Add)
		route.PUT("", ctrl.Update)
		route.DELETE("", ctrl.Delete)
		route.GET("/detail", ctrl.Search)
		route.GET("/search", ctrl.SearchName)
	}

}
