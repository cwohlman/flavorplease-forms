Package.describe({
  summary: "Form auto-layout templates with reactive content and validation."
});

Package.on_use(function (api, where) {
  api.use('ui');
  api.use('templating');
  api.use('reactive-dict');
  api.use('underscore');
  api.use('less');

  api.use('reactive-forms');
  api.imply('reactive-forms');
  
  api.add_files('vendor/selectize.js', ['client']);

  api.add_files('vendor/plugins/drag_drop.import.less', ['client']);
  api.add_files('vendor/plugins/dropdown_header.import.less', ['client']);
  api.add_files('vendor/plugins/optgroup_columns.import.less', ['client']);
  api.add_files('vendor/plugins/remove_button.import.less', ['client']);
  api.add_files('vendor/selectize.lessimport', ['client']);
  api.add_files('vendor/selectize.bootstrap3.lessimport', ['client']);

  api.add_files('form.html', ['client']);
  api.add_files('form.js', ['client']);
  api.add_files('forms-form-wrapper.js', ['client']);
  api.add_files('forms-form-wrapper-default.html', ['client']);

  api.add_files('forms-field.html', ['client']);
  api.add_files('forms-field-wrapper.js', ['client']);
  api.add_files('forms-field-wrapper-default.html', ['client']);

  api.add_files('forms-input.js', ['client']);
  api.add_files('forms-input-input.html', ['client']);
  api.add_files('forms-input-select.html', ['client']);
  api.add_files('forms-input-select.js', ['client']);
  api.add_files('forms-input-selectize.html', ['client']);
  api.add_files('forms-input-selectize.js', ['client']);
  api.add_files('forms-input-checkbox.html', ['client']);
  api.add_files('forms-input-filepicker.html', ['client']);
  api.add_files('forms-input-filepicker.js', ['client']);

  api.add_files('forms-no-op.html', ['client']);
});

Package.on_test(function (api) {
  api.use('reactive-forms-templates');

  api.add_files('reactive-forms-templates_tests.js', ['client', 'server']);
});
