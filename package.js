Package.describe({
  name: 'nickgermaine:fresh-notifications',
  version: '0.0.1',
  summary: 'Fresh, customizable in-app notifications',
  git: 'https://github.com/nickgermaine/fresh-notifications.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use(['react', 'less', 'jquery', 'natestrauser:font-awesome'], 'client');

  api.addFiles(['fresh-notifications.js', 'fresh-notification-style.less', 'fresh-notifications.jsx'], 'client');

  api.export(['FreshNotifications', 'FreshNotify'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nickgermaine:fresh-notifications');
  api.addFiles('fresh-notifications-tests.js');
});
