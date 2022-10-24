package models

import "time"

type Checkout struct {
	CheckoutId   uint      `gorm:"primaryKey" json:"id,omitempty"`
	CheckoutName string    `json:"checkout_name,omitempty"`
	UserId       string    `gorm:"type:uuid;" json:"user_id"`
	User         User      `json:"user"`
	CartItem     []Cart    `gorm:"foreignKey:CheckoutId;references:CheckoutId;"`
	DelivAddress string    `json:"deliv_address,omitempty"`
	Notes        string    `json:"notes,omitempty"`
	Discount     int       `json:"discount,omitempty"`
	Total        int       `json:"total,omitempty"`
	CreatedAt    time.Time `gorm:"default:now(); not null" json:"created_at"`
	UpdatedAt    time.Time `gorm:"default:now(); not null" json:"updated_at"`
}

type Cart struct {
	CartId     int     `gorm:"primaryKey;type:uint" json:"cart_id"`
	ProductsId int     `json:"product_id"`
	Products   Product `gorm:"foreignKey:ProductsId;references:ProductId;"`
	CheckoutId uint    `json:"checkout_id,omitempty"`
	Amount     int     `json:"amount,omitempty"`
}

type Carts []Cart
type Checkouts []Checkout
