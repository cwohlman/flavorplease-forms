UI.registerHelper('formsFieldsWrapper', function () {
	return Template[this.get('options', 'fieldsWrapperTemplate')] || Template._formsNoOp;
});