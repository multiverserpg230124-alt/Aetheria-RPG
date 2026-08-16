!function() {

	function setBodyClassByUser($body, usr) {
		const colorel = $('[style]', usr);

		if (!colorel.length) {
			$body.addClass('usergroup-nogroup');
			return;
		}

		const groupcolor = colorel.attr('style'),
		color = groupcolor.substr(groupcolor.lastIndexOf('#'));
		$body.addClass(`usergroup-${ FLX.forumGroups.getByColor(color).code || 'unknown' }`);
	}

	$(function() {
		const $body = $('body');

		if (_userdata['user_id'] == -1) {
			$body.addClass('usergroup-guest');
			return;
		}

		const usr = $('#usergroup-user');

		if (usr.length) {
			setBodyClassByUser($body, usr);
			return;
		}

		$.get('/faq', function(data) {
			setBodyClassByUser($body, $(data).find('#flerex-user'));
		});

	});
}();
