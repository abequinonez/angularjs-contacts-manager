angular
  .module('components.auth', ['ui.router', 'firebase'])
  .config(function($firebaseRefProvider) {
    var config = {
      apiKey: 'AIzaSyBqaCYCWF-ZpquLwodpg598NBuoVw5dzS4',
      authDomain: 'angularjs-contacts-manager.firebaseapp.com',
      databaseURL: 'https://angularjs-contacts-manager.firebaseio.com',
      projectId: 'angularjs-contacts-manager',
      storageBucket: 'angularjs-contacts-manager.appspot.com',
      messagingSenderId: '27490833041'
    };

    $firebaseRefProvider.registerUrl({
      default: config.databaseURL,
      contacts: config.databaseURL + '/contacts'
    });

    firebase.initializeApp(config);
  });
