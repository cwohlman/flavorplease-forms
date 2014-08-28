Template.formsInputFilePicker.helpers({
	buttonText: function () {
		return this.field.buttonText || this.field.label || this.field.placeholder || this.field.name;
	}
	, dirty: function (name) {
		return this.get(name) != this.item[name];
	}
});

Template.formsInputFilePicker.rendered = function(){
	if(!_.isUndefined(window.filepicker)){
		// XXX display an inteligent error message if an invalid api key, or no api key,
		// is set.
		$(this.find('[type^="filepicker"]')).each(function(index, el){
			filepicker.constructWidget(el);
		});
	}
};
