UI.registerHelper("formsInput", function () {
	var template = this.get('field', 'template');
	// otherwise cascade through the available options

	template = template || "formsInputInput";

	return Template[template];
});