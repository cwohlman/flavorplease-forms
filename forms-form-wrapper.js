UI.registerHelper("formsFormWrapper", function () {
	var template = this.get('options', 'formWrapperTemplate');
	return Template[template] || Template._formsNoOp;
});