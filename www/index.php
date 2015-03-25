<?php

	require('util.php');
		
	function buildArticle($planete) 
	{
		return '<article>
				<header>
					<img src="' . $planete->image . '" alt="' . $planete->name . '" width="250" height="250">
					<h2>' . $planete->name . '</h2>
				</header>
				<p>' . $planete->description . '</p>
				<ul>
					<li>Rayon : ' . $planete->rayon . '</li>
					<li>Distance du Soleil : ' . $planete->rayon . '</li>
				</ul>
				<a href="detail.php?planete=' . strtolower($planete->name) . '">En apprendre plus sur ' . $planete->name . '</a>
			</article>';


	}

	function buildList($planetes) 
	{
		$html = '<div class="listArticle">';
		foreach ($planetes as $planete) {
			$html .= buildArticle($planete);
		}

		$html .= '</div>';
		return $html;
	}

	$planetes = json_decode(file_get_contents('planete.json'));
?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Galactique map</title>
 	<link rel="stylesheet" href="css/desktop.css" media="only screen">
 	<link rel="stylesheet" href="css/mobile.css" media="only screen and (min-width:0px) and (max-width: 480px)"> 
 </head>
 <body>
 	<section id="main">
	 	<header class="HeaderPage">
	 		<img src="images/logo.png" class="logo">
	 		<h1>Galactique Map</h1>
		 	<nav class="navPrincipal">
		 		<?php echo buildNav('home', $planetes);?>
		 	</nav>
	 	</header>
	 	<?php if (isset($_GET['error']) && $_GET['error'] == 404) : ?>
	 		<p class="msgError">Impossible de trouver des informations sur la planete recherché</p>
	 	<?php endif;?>
	 	<?php echo buildList($planetes);?>
	 	<footer class="footer">
	 		@Raphaël Choquet - information issue de Wikipédia
	 	</footer>
 	</section>
 </body>
 </html>

