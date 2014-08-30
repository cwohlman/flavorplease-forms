var fieldTypeTemplateMap = {
	options: 'formsInputSelect'
	, select: 'formsInputSelect'
	, selectize: 'formsInputSelectize'
	, file: 'formsInputFilePicker'
	, checkbox: 'formsInputCheckbox'
	, boolean: 'formsInputCheckbox'
	, legend: 'formsInputLegend'
};

UI.registerHelper("formsInput", function () {
	var template = this.get('field', 'template');
	// otherwise cascade through the available options

	template = template || fieldTypeTemplateMap[this.get('field', 'type')];

	template = template || "formsInputInput";

	return Template[template];
});