<?php
	require('util.php');

	function attribut_exists($attribut, $objet) 
	{	
		$array = (array) $objet;
		return array_key_exists($attribut, $array);
	}

	$planetes = json_decode(file_get_contents('planete.json'));

	if (!isset($_GET['planete'])) {
		header('location: index.php');
	}

	if(attribut_exists(strtolower($_GET['planete']), $planetes)) {
		$planete = $planetes->{strtolower($_GET['planete'])};
	} else {
		header('location: index.php?error=404');
	}
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
		 		<?php echo buildNav($_GET['planete'], $planetes);?>
		 	</nav>
	 	</header>
			<article class="mainArticle">
				<img src="<?php echo $planete->image;?>">
				<header><h2><?php echo $planete->name;?></h2></header>
				<ul>
					<li>Rayon : <?php echo $planete->rayon;?></li>
					<li>Distance : <?php echo $planete->distance;?></li>
				</ul>
				<?php echo $planete->content;?>
			</article>
	 	<footer class="footer">
	 		<div id="map"></div>
	 		<p>@Raphaël Choquet - information issue de Wikipédia</p>
	 	</footer>
 	</section>
 	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>
 	<script src="js/geoloc.js"></script>
 </body>
 </html>

