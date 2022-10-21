package users

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func New(rt *gin.Engine, db *gorm.DB) {
	repo := NewRepo(db)
	svc := NewService(repo)
	ctrl := NewCtrl(svc)

	route := rt.Group("/user")
	{
		route.GET("", ctrl.GetAll)
		route.POST("", ctrl.Add)
		route.PUT("", ctrl.Update)
		route.DELETE("", ctrl.Delete)
		route.GET("/detail", ctrl.Search)
		route.GET("/search", ctrl.SearchName)
	}

}
