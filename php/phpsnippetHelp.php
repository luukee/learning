<?php


// my list of thing that need done
// 1) single product page
//// - Total (ajax)
// 2) 





























//////////////////////////////////////////////////////////////////// REFERENCES & LINKS


// Wordpress Template Tags
// https://codex.wordpress.org/Template_Tags

// WordPress Conditional Tags
// https://codex.wordpress.org/Conditional_Tags

// WordPress Actions
// https://codex.wordpress.org/Plugin_API/Action_Reference

// Wordpress Filters
// https://codex.wordpress.org/Plugin_API/Filter_Reference

// Wordpress Coding Standards
// https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/

/////////////////////////////////////////////////////////////////// CREDENTIALS

//////// STAGING (stagingtest.clevercreative.net) Guest Admin details
// Username: Guest Admin
// Password: WEKP^&&jP4MMjm^(Gg@uEgcZ

// stagingtest.clevercreative.net Guest FTP Credentials
// Username: stagingtest
// Password: qTur2t=!xaXN

///////////////// QUESTIONS & NOTES

/*
* Tyche: 	Can we get total price auto update on single product pages as well as grouped product pages and remove the individual pricing fields.
*			The deposit does not show up anywhere in the checkout process. That is where we would like it. Also the deposit should show show up as an added fee to the order.
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/




//////////////////////////////////////////////////////////////////// SNIPPET HELP

// remove woocommerce_account_payment_methods_endpoint from woocommerce_account_payment-methods_endpoint after woocommerce_after_edit_account_form
remove_action( 'woocommerce_account_payment-methods_endpoint', 'woocommerce_account_payment_methods' );
add_action( 'woocommerce_after_edit_account_form', 'woocommerce_account_payment_methods' );


// output html or php within inner ?> and <?php //to $checkout
add_action('woocommerce_multistep_checkout_before_order_contents', 'cclever_add_title_above_table_on_checkout_payment');
	function cclever_add_title_above_table_on_checkout_payment($checkout) {
		?>
			<h4>Confirmation</h4>
			<p>Make sure everything looks good.</p>
		<?php
			}

// if you are in a speific category (renatls with this example), run the bottom if statement (load the insurance.php file in this example)
function cclever_show_insurance_step_if_rentals() {

	if ( function_exists( 'wc_checkout_add_ons' ) ) {
		
		$cat_check = false;
		
		// check each cart item for our category
		foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
			
			$product = $cart_item['data'];
			
			// replace 'gift_box' with your category's slug
			if ( has_term( 'rentals', 'product_cat', $product->id ) ) {
				$cat_check = true;
				// we only need one "true" to leave
				break;
			}
		}
		
		// if a product in the cart is in our category, remove the add-ons
		if ( $cat_check ) {
			
			add_action('woocommerce_multistep_checkout_before_order_info', 'cclever_add_insurance_custom_step');
			function cclever_add_insurance_custom_step( $checkout ) {
			  wc_get_template( 'checkout/insurance.php', array( 'checkout' => $checkout ) );
			}
		}
	}
}
add_action( 'woocommerce_before_checkout_form', 'cclever_show_insurance_step_if_rentals' );



////////////////////////////////////////////////// conditional statement to show custom field

add_action( 'woocommerce_before_add_to_cart_form', 'text_below_short_description' ); 
	function text_below_short_description() { 
$values = get_field( 'text_below_short_description' );
if ( $values ) {
    echo '<div class="sm text_below_short_description">';
    echo the_field('text_below_short_description');
    echo '</div>';
	} else {
	    echo '';
	}
}



//////////////////////////////// check if it is rental category, if it is, display "How Rentals Work" above product description
add_action( 'woocommerce_single_product_summary', 'link_above_short_description', 15 );		
	function link_above_short_description(){
	global $post;
	$terms = wp_get_post_terms( $post->ID, 'product_cat' );
	foreach ( $terms as $term ) $categories[] = $term->slug;

	if ( in_array( 'rentals', $categories ) ) {
	  echo '<div class="description"><i><a href="http://localhost:3002/foundation/how-it-works/" title="How it Works">How Rentals Work'. ' ' .'<i class="fa fa-long-arrow-right" aria-hidden="true"></i></i></a></div>'; 
	} else {
	  echo '';
	}
}


// add body classes

function body_class_plus() { 
	if(function_exists('body_class')) { 
		ob_start(); body_class(); 
		$class = ob_get_contents(); 
		ob_end_clean(); 
		if($class) {
			if(preg_match("/tax-product_cat/i", $class)) { 
				echo 'class="services"';
			} elseif(preg_match("/products/i", $class)) {
				echo '';
			} elseif(preg_match("/business/i", $class)) {
				echo 'class="business"';
			} elseif(preg_match("/pleasure/i", $class)) {
				echo 'class="pleasure"';
			} else {
				echo 'class="no-body-class-matches"';
			}
		} else { 
			echo 'class="body-class-not-available"'; 
		} 
	}
}
