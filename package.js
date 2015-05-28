Package.describe({
  name: 'peter:geoip',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'simple ip based location data.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/siegesmund/meteor-geoip.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['coffeescript', 'reactive-dict', 'http', 'gadicohen:headers@0.0.27']);
  api.addFiles('geoip.coffee');
  api.export(['geoip'], 'client');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('peter:geoip');
  api.addFiles('tests.js');
  api.export(['geoip'], 'client');
});
