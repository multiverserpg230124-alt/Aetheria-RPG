!function() {

	const settings = {
		css: `
			body {
				background: white;
			}

			body,
			code:before,
			html,
			p,
			table {
				font-size: 15px;
				color: black;
				font-family: Verdana, sans-serif;
				line-height: 1.8;
			}
		`, // CSS en JS es mala práctica, pero es la única manera.
		icons: {
			bold: 'bold',
			italic: 'italic',
			underline: 'underline',
			strike: 'strikethrough',
			left: 'align-left',
			center: 'align-center',
			right: 'align-right',
			justify: 'align-justify',
			bulletlist: 'list-ul',
			orderedlist: 'list-ol',
			horizontalrule: 'grip-lines',
			quote: 'quote-right',
			code: 'terminal',
			faspoiler: 'toggle-on',
			fahide: 'eye-slash',
			table: 'table',
			servimg: 'upload',
			image: 'images',
			link: 'link',
			youtube: ['fab', 'fa-youtube'],
			dailymotion: 'video',
			flash: 'file-video',
			headers: 'heading',
			size: 'text-height',
			color: 'palette',
			font: 'font',
			removeformat: 'undo',
			more: 'ellipsis-h',
			subscript: 'subscript',
			superscript: 'superscript',
			fascroll: 'arrows-alt-h',
			faupdown: 'arrows-alt-v',
			farand: 'dice',
			faroll: 'dice-six',
			emoticon: 'smile',
			date: 'calendar',
			time: 'clock',
			pastetext: 'paste',
			source: 'code',
		},

	};

	function replaceButtons(container) {
		Object.keys(settings.icons).forEach(k => {
			const button = container.querySelector('.sceditor-button-' + k),
			icon = document.createElement('I');

			if (!button) return;

			icon.classList.add(...(Array.isArray(settings.icons[k])
				? settings.icons[k]
				: ['fas', 'fa-' + settings.icons[k]]
			));


			button.removeChild(button.firstElementChild);
			button.appendChild(icon);

		});
	}

	function appendStylesheet({contentDocument}) {
		const style = contentDocument.createElement('STYLE');
		style.innerHTML = settings.css;
		contentDocument.head.appendChild(style);
	}

	function ready(e) {
		const container = document.getElementById('textarea_content');
		if (!container) return;

		replaceButtons(container);

		const iframe = container.querySelector('iframe');
		if (!iframe) return;

		appendStylesheet(iframe);

	}
	document.addEventListener('DOMContentLoaded', ready);

}();
