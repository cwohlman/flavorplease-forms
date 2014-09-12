Forms.helpers.field = {
	// Default field settings
	type: "text"
	, fieldWrapperTemplate: 'formsFieldWrapperDefault'

	// filepicker
	, filepickerButtonText: 'Upload'
	, filepickerAllowMultiple: false

	// wrapper settings
	, hasErrorClass: function () {
		return this.get('errors', this.fieldName) ? 'has-error' : '';
	}
};

Forms.helpers.options = {
	formWrapperTemplate: 'formsFormWrapperDefault'
	, fieldsWrapperTemplate: 'formsFieldsWrapperDefault'
	, buttonsWrapperTemplate: 'formsButtonsWrapperDefault'
};

Forms.helpers.button = {

};

Forms.helpers.buttons = {
	submit: {
		type: 'submit'
		, label: 'Submit'
		, 'class': 'btn-primary'
	}
};

Forms.helpers.onInvalid = function  (errors) {
	console.log("Errors in form", errors);
	Notify.error("The form is invalid", _.flatten(errors)[0]);
};