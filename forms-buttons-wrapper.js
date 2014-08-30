UI.registerHelper('formsButtonsWrapper', function () {
	return Template[this.get('options', 'buttonsWrapperTemplate')] || Template._formsNoOp;
});