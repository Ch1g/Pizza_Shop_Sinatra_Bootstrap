require './app.rb'
Product.create title: 'Hawaiian', description: 'This is standart hawaiian pizza', price: 350, size: 30, is_spicy: 0, is_veg: 0, is_best_offer: 0, path_to_image: '/images/hawaiian.jpg'
Product.create title: 'Pepperoni', description: 'This is standart pepperoni pizza',	price: 450,	size: 30, is_spicy: 1, is_veg: 0, is_best_offer: 1,	path_to_image: '/images/pepperoni.jpg'	
Product.create title: 'From Chef', description: 'This is our special Chef pizza', price: 500, size: 30,	is_spicy: 0, is_veg: 1, is_best_offer: 1, path_to_image: '/images/chef.jpg'