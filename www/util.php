<?php

function buildForm() 
{
	$html = '<form action="detail.php" method="get">
		<input type="text" name="planete"><button type="submit">Rechercher</button>
	</form>';
	return $html;
}

function buildNav($selected, $planetes) 
{
	$html = '<ul><li><a href="index.php" ' . ($selected === 'home' ? 'class="active"' : '') . '>Accueil</a></li>';
	foreach ($planetes as $planete) {
		$html .= '<li><a href="detail.php?planete=' . strtolower($planete->name) .'" 
							' . ($selected === strtolower($planete->name) ? 'class="active"' : '') . ' >'
					. $planete->name .'
				</a></li>';
	}

	$html .= '<li>' . buildform() .'</li></ul>';
	return $html;
}