function cart_get_total_amount()
	{
		var total = 0; // define new variable

		for (var i = 0; i < localStorage.length; i++) // starts for-loop thats enumerates from 0 to lS.length
		{	
			var key = window.localStorage.key(i); // get key

			if(key.indexOf('product_') == 0) //checks if key matches the condition
			{
				var total = total + window.localStorage.getItem(localStorage.key(i)) * 1; // sums values of matching keys from lS
			}
		}

		return total;	// returns total var value
	}

function order_complete() //clears localStorage
	{
		window.localStorage.clear();
	}

function cancel_order() 
	{
		window.localStorage.clear();

		update_orders_input();
		update_orders_button();
		update_orders_cost();

		$('#cart_content').text('Your Cart is now empty');

		return false;
	}	

function cart_get_total_price()
	{
		var total = 0; //

		for (var i = 0; i < localStorage.length; i++) // starts for-loop thats enumerates from 0 to lS.length
		{
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
	
			if (key.indexOf('price_') == 0) //checks if key matches the condition
				{
					total = total + value * 1;
				}	
		}
		return total;
	}

function add_to_cart(id, price)
	{
		var count_key = 'product_' + id; // extract new variables
		var price_key = 'price_' + id; // 
		var cart = window.localStorage.getItem(count_key); // get value of current key from local storage and set it to variable cart
		var cart_price = window.localStorage.getItem(price_key);

		cart = cart * 1 + 1; // increase var cart by 1
		cart_price = cart_price * 1 + price;
		window.localStorage.setItem(count_key, cart); // set cart as value of key
		window.localStorage.setItem(price_key, cart_price); //set price as value of key

		update_orders_input();
		update_orders_button();
		update_orders_cost();
	}

function cart_get_orders()
	{
		var orders = ''; // define new variable

		for (var i = 0; i < localStorage.length; i++) // starts for-loop thats enumerates from 0 to lS.length
		{	
			var key = window.localStorage.key(i); // gets key
			var value = window.localStorage.getItem(key); // gets value of key

			if(key.indexOf('product_') == 0) //checks if key matches the condition
			{
				var orders = orders + key + '=' + value + ';'; //
			}	
		}

		return orders;	// returns orders
	}

function update_orders_input()
	{
		var orders = cart_get_orders();
		$('#orders_input').val(orders);
	}

function update_orders_button()
	{
		var text = 'Cart (' + cart_get_total_amount() + ')';
		$('#orders_button').val(text);
	}

function update_orders_cost()
	{
		var price = 'Total cost: ' + cart_get_total_price() + ' rub.';
		$('#orders_price').text(price);
	}

function cart_check()
	{
		if(cart_get_total_amount() == 0)
		{
			alert('First you should choose something!');
			return false;
		}
	}