Package.describe({
  summary: "Form auto-layout templates with reactive content and validation."
});

Package.on_use(function (api, where) {
  api.use('reactive-forms');
  api.imply('reactive-forms');
  
  api.add_files('reactive-forms-templates.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('reactive-forms-templates');

  api.add_files('reactive-forms-templates_tests.js', ['client', 'server']);
});
