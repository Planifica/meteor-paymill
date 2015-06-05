Package.describe({
  name: 'planifica:paymill',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Official JS paymill library carefully packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Planifica/meteor-paymill',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({'paymill-wrapper': '2.1.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles('paymill.js', 'server');

  api.use(['templating'], 'client');
  api.addFiles('paymillBridge.html', 'client');

  api.export('Paymill', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('planifica:paymill');
  api.addFiles('paymill-tests.js');
});
