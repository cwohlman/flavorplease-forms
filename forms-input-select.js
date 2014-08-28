Template.formsInputSelect.helpers({
	options: function () {
		var options = this.get('field', 'options');
		if (_.isArray(options)) return _.map(options, function (val) {
			return {
				key: val && (val._id || val.name || val)
				, name: val && (val.name || val._id || val)
				, value: val
			};
		});
		if (_.isObject(options)) return _.map(options, function (val, key) {
			return {
				key: key
				, name: val && (val.name || val)
				, value: val
			};
		});
		return [];
	}
	, selected: function (parent) {
		// XXX parent is a hack here, we'd like to be able to access it directly from the helper.
		if (parent.field.selectByKey) return parent.get(parent.fieldName) == this.key;
		else return parent.get(parent.fieldName) == this.value;
	}
});
