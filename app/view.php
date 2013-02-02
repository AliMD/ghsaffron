<?php

@file_exists("./pages/$template[page].php") or $template['page'] = '404';

// view template
console_log($template);

inc('header_fa');

echo '<div class="container">';

	inc($template['page'],'pages');

echo '</div>';

inc('analytic');

console_log_show();

inc('footer');
