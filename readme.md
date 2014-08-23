Reactive Forms Templates
========================
Based on the reactive-forms package, this package adds the ui and styles which makes writing plain vanilla forms a breeze. Specify a simple schema and the forms-templates package will do the rest to create a beautiful bootstrap-3 horizontal form with inputs, checkboxes, selectboxes and even sub-documents fully laid out. But the real power behind this package comes when you want to do something different.

When you want to do something a little differently you have lots of options:

1. Want some custom effects for a particular field, perhaps a map? Just define a custom template with all the right html and events.
2. Need some extra ui, a little message above the submit button etc? Place your ui at any point in the form using 'label' schema elements.
3. Or use a block helper `{{#reactiveForm}}` and your content will be inserted just above the submit buttons.
4. Your whole form a little special? Making a wizard? Special animations? Just set an option to turn off auto-layout and continue using all the other reactive-forms goodness.
5. Don't want a horizontal-form? Don't want to use form-groups? Want a blue background? The form layout engine provides global and local styling options for nearly every element it generates.
6. Not using bootstrap 3? Want to really change the way your fields and buttons are laid out? Try our favorite trick, clone into your packages directory, now you have complete control over the layout and styling of everything!

Important Note
==============
This package is a work in progress... and is not ready to use.