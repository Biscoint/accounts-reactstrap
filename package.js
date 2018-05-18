Package.describe({
  summary: 'Reactstrap UI Components for accounts-React',
  version: '0.5.0',
  name: 'meteoreact:accounts-reactstrap',
  git: 'https://github.com/Biscoint/accounts-reactstrap.git',
  documentation: null,
});

Package.onUse((api) => {
  api.versionsFrom('1.6.1');

  api.use('ecmascript');
  api.mainModule('index.js', 'client');
});
