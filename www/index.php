<?php
		
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

	function buildNav($planetes) 
	{
		$html = '<ul>';
		foreach ($planetes as $planete) {
			$html .= '<li><a href="detail.php?planete=' . strtolower($planete->name) .'" >' . $planete->name .'</a></li>';
		}

		$html .= '</ul>';
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
 </head>
 <body>
 	<section id="main">
	 	<header>
	 		<img src="images/logo.png">
	 		<h1>galactique Map</h1>
		 	<nav>
		 		<?php echo buildNav($planetes);?>
		 	</nav>
	 	</header>
	 	<?php echo buildList($planetes);?>
	 	<footer>
	 		@Raphaël Choquet - information issue de Wikipédia
	 	</footer>
 	</section>
 </body>
 </html>

