/* 
Adapted from https://github.com/ajbdev/DuckDuckGoose
Author: Baturay Palas baturay_at_outlook.fr
*/
function update() {
	const ul = document.getElementsByTagName('ul')[0];
	const li = document.createElement('li');
	const input = document.getElementById('sb_form_q');

	function updateGoogleSearch() {
		const s = encodeURIComponent(input.value);
		document.getElementById('bingo').href = 'https://www.google.com/search?&q=' + s;
	}

	li.setAttribute('data-menuurl', '');
	li.innerHTML = `<a target id="bingo">Google</a>`;

	if (input && input.value) {
		ul.appendChild(li);
		input.onkeyup = updateGoogleSearch;
		input.onblur = updateGoogleSearch;
		updateGoogleSearch();
	}}

update();

chrome.runtime.onMessage.addListener(
  function(request) {
		if (request.message === 'bingo') {
			update();
		}
});