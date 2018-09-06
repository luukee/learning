
 <!-- add widget -->
 <!-- place this where you'd like the widget to show up ex.footer -->
<?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar("Name of Widgetized Area")) : ?>
<?php endif;?>

<?php
// place this in your functions.php file
if (function_exists('register_sidebar')) {
    register_sidebar(
      array(
    'name' => 'Name of Widgetized Area',
    'before_widget' => '<div class = "widgetizedArea">',
    'after_widget' => '</div>',
    'before_title' => '<h3>',
    'after_title' => '</h3>',
  )
);
}
