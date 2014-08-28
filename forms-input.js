var fieldTypeTemplateMap = {
	options: 'formsInputSelect'
	, select: 'formsInputSelect'
	, file: 'formsInputFilePicker'
	, checkbox: 'formsInputCheckbox'
	, boolean: 'formsInputCheckbox'
};

UI.registerHelper("formsInput", function () {
	var template = this.get('field', 'template');
	// otherwise cascade through the available options

	template = template || fieldTypeTemplateMap[this.get('field', 'type')];

	template = template || "formsInputInput";

	return Template[template];
});