var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (width < 400) {
	var jumbo = document.querySelector('#jumbo-container');
	jumbo.className = 'container-fluid';
	console.log('made it');
}