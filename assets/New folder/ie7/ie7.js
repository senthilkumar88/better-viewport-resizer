/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'cust\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ico-image': '&#xe664;',
		'ico-image2': '&#xe665;',
		'ico-images': '&#xe666;',
		'ico-camera': '&#xe667;',
		'ico-play': '&#xe668;',
		'ico-film': '&#xe669;',
		'ico-camera2': '&#xe66a;',
		'ico-copy': '&#xe66b;',
		'ico-qrcode': '&#xe600;',
		'ico-envelope': '&#xe601;',
		'ico-history': '&#xe602;',
		'ico-clock': '&#xe603;',
		'ico-calendar': '&#xe604;',
		'ico-calendar2': '&#xe605;',
		'ico-print': '&#xe606;',
		'ico-keyboard': '&#xe607;',
		'ico-screen': '&#xe608;',
		'ico-laptop': '&#xe609;',
		'ico-mobile': '&#xe60a;',
		'ico-mobile2': '&#xe60b;',
		'ico-tablet': '&#xe60c;',
		'ico-tv': '&#xe60d;',
		'ico-drawer': '&#xe60e;',
		'ico-drawer2': '&#xe60f;',
		'ico-drawer3': '&#xe610;',
		'ico-download': '&#xe611;',
		'ico-upload': '&#xe612;',
		'ico-disk': '&#xe613;',
		'ico-undo': '&#xe614;',
		'ico-redo': '&#xe615;',
		'ico-undo2': '&#xe616;',
		'ico-redo2': '&#xe617;',
		'ico-forward': '&#xe618;',
		'ico-reply': '&#xe619;',
		'ico-bubble': '&#xe61a;',
		'ico-bubbles': '&#xe61b;',
		'ico-bubbles2': '&#xe61c;',
		'ico-bubble2': '&#xe61d;',
		'ico-bubbles3': '&#xe61e;',
		'ico-bubbles4': '&#xe61f;',
		'ico-busy': '&#xe620;',
		'ico-spinner': '&#xe621;',
		'ico-spinner2': '&#xe622;',
		'ico-spinner3': '&#xe623;',
		'ico-spinner4': '&#xe624;',
		'ico-spinner5': '&#xe625;',
		'ico-expand': '&#xe626;',
		'ico-contract': '&#xe627;',
		'ico-expand2': '&#xe628;',
		'ico-contract2': '&#xe629;',
		'ico-wrench': '&#xe62a;',
		'ico-settings': '&#xe62b;',
		'ico-cog': '&#xe62c;',
		'ico-cogs': '&#xe62d;',
		'ico-cog2': '&#xe62e;',
		'ico-wand': '&#xe62f;',
		'ico-bug': '&#xe630;',
		'ico-stats': '&#xe631;',
		'ico-bars': '&#xe632;',
		'ico-rocket': '&#xe633;',
		'ico-fire': '&#xe634;',
		'ico-lab': '&#xe635;',
		'ico-magnet': '&#xe636;',
		'ico-remove': '&#xe637;',
		'ico-remove2': '&#xe638;',
		'ico-airplane': '&#xe639;',
		'ico-shield': '&#xe63a;',
		'ico-lightning': '&#xe63b;',
		'ico-switch': '&#xe63c;',
		'ico-menu': '&#xe63d;',
		'ico-menu2': '&#xe63e;',
		'ico-earth': '&#xe63f;',
		'ico-link': '&#xe640;',
		'ico-flag': '&#xe641;',
		'ico-bookmark': '&#xe642;',
		'ico-brightness-contrast': '&#xe643;',
		'ico-star': '&#xe644;',
		'ico-star2': '&#xe645;',
		'ico-star3': '&#xe646;',
		'ico-heart': '&#xe647;',
		'ico-heart2': '&#xe648;',
		'ico-happy': '&#xe649;',
		'ico-smiley': '&#xe64a;',
		'ico-info': '&#xe64b;',
		'ico-info2': '&#xe64c;',
		'ico-blocked': '&#xe64d;',
		'ico-close': '&#xe64e;',
		'ico-checkmark': '&#xe64f;',
		'ico-arrow-right': '&#xe650;',
		'ico-arrow-left': '&#xe651;',
		'ico-filter': '&#xe652;',
		'ico-filter2': '&#xe653;',
		'ico-paragraph-left': '&#xe654;',
		'ico-paragraph-justify': '&#xe655;',
		'ico-console': '&#xe656;',
		'ico-share': '&#xe657;',
		'ico-mail': '&#xe658;',
		'ico-googleplus': '&#xe659;',
		'ico-facebook': '&#xe65a;',
		'ico-twitter': '&#xe65b;',
		'ico-github': '&#xe65c;',
		'ico-github2': '&#xe65d;',
		'ico-github3': '&#xe65e;',
		'ico-github4': '&#xe65f;',
		'ico-file-pdf': '&#xe660;',
		'ico-file-css': '&#xe661;',
		'ico-html5': '&#xe662;',
		'ico-html52': '&#xe66c;',
		'ico-css3': '&#xe663;',
		'ico-chrome': '&#xe66d;',
		'ico-firefox': '&#xe66e;',
		'ico-IE': '&#xe66f;',
		'ico-opera': '&#xe670;',
		'ico-safari': '&#xe671;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
