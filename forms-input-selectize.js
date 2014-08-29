Template.formsInputSelectize.rendered = function () {
	var $select = $(this.find('select')).selectize({
		create: true
		, valueField: '_id'
		, labelField: 'name'
	});
	var selectize = $select[0].selectize;

	this.autorun(function () {
		var self = this.lookup('.')();
		selectize.clearOptions();

		// the spacebars.kw flag ensures that we execute any functions
		// and is equivilent to this line:
		// `if (typeof options == 'function') options = options();`
		var options =
			self.get('field', 'options', new Spacebars.kw()) ||
			self.get('field', 'autocomplete', new Spacebars.kw());

		options = _.map(options, function (a) {
			if (!a || typeof a != 'object') {
				return {
					_id: a
					, name: a
				};
			} else {
				return a;
			}
		});

		_.each(options, function (option) {
			selectize.addOption(option);
		});
	});
};