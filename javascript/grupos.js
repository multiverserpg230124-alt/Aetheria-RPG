!function() {
	const groups = [
		{
			name: 'Astraea',
			code: 'astraea',
			color: '#7F5B9F',
		},
		{
			name: 'Ember',
			code: 'ember',
			color: '#CBAEDB',
		},
          	{
			name: 'Abyss',
			code: 'abyss',
			color: '#6E8B96',
		},
{
			name: 'Glacies',
			code: 'glacies',
			color: '#89D7CC',
		},
		{
			name: 'Nébula',
			code: 'nebula',
			color: '#8FD270',
		},
          	{
			name: 'Astra',
			code: 'astra',
			color: '#FFD166',
		},
{
			name: 'Titan',
			code: 'titan',
			color: '#EEA33A',
		},
		{
			name: 'Kaelum',
			code: 'kaelum',
			color: '#D33C48',
		},
          	{
			name: 'Apex',
			code: 'apex',
			color: '#F28CC3',
		},
{
			name: 'Solaris',
			code: 'solaris',
			color: '#F8CCAA',
		},
		{
			name: 'Stasis',
			code: 'stasis',
			color: '#3C3D3E',
		},
	];

	function getByColor(color) {
		return groups.find(g => g.color.toUpperCase() === color.toUpperCase());
	}

	function getByCode(code) {
		return groups.find(g => g.code === code);
	}

	function getByName(name) {
		return groups.find(g => g.name === name);
	}

	window.FLX = window.FLX || {};
	window.FLX.forumGroups = window.FLX.forumGroups || {
		getByName, getByCode, getByColor
	};
}();
