#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

class Product < ActiveRecord::Base

end

class Order < ActiveRecord::Base

end

get '/' do
	erb :index
end

get '/pizzas' do
	erb :pizzas	
end


get '/cart' do
	redirect to '/pizzas'
end

post '/cart' do
	@order = parse_order_line(params['order'])
	erb :cart	
end

get '/order' do
	erb :orders
end

post '/order' do
	order = Order.new params['orders']
	order.save
	erb "<h4>Thank You!</h4> <script type='text/javascript'> alert('Thank you! Your pizza is coming soon!'); </script>"
end

def parse_order_line (order) #decodes Js function 'cart_get_order' output to hash
	hash_order = {} #stores order in hash

	order.split(/;/).each do |x| #decode cycle
		s1 = x.split(/=/)
		s2 = s1[0].split(/_/)
		hash_order[s2[1].to_i] = s1[1].to_i
	end

	hash_order
end
