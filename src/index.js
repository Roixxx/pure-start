// project styles
import '@/scss/styles';

// UI components scripts
import '@/components/_ui/popup/popup';

function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('./assets/img/svg/', true, /\.svg$/));

fetch('./assets/img/svg/sprite.svg')
	.then((res) => res.text())
	.then((data) => {
		document.body.insertAdjacentHTML('beforeend', data);
	});
