angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('pulsaMax.menuUtama', {
    url: '/utama',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menuUtama.html',
        controller: 'menuUtamaCtrl'
      }
    }
  })

  .state('pulsaMax.pendaftaranReseller', {
    url: '/daftar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pendaftaranReseller.html',
        controller: 'pendaftaranResellerCtrl'
      }
    }
  })

  .state('pulsaMax.tiket', {
    url: '/tiket',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tiket.html',
        controller: 'tiketCtrl'
      }
    }
  })

  .state('komplain', {
    url: '/komplain',
    templateUrl: 'templates/komplain.html',
    controller: 'komplainCtrl'
  })

  .state('pulsaMax.setting', {
    url: '/setting',
    views: {
      'side-menu21': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('pulsaMax.transferSaldo', {
    url: '/transfer',
    views: {
      'side-menu21': {
        templateUrl: 'templates/transferSaldo.html',
        controller: 'transferSaldoCtrl'
      }
    }
  })

  .state('pulsaMax.transferKomisi', {
    url: '/transferkms',
    views: {
      'side-menu21': {
        templateUrl: 'templates/transferKomisi.html',
        controller: 'transferKomisiCtrl'
      }
    }
  })

  .state('pulsaMax.gantiPIN', {
    url: '/gantipin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gantiPIN.html',
        controller: 'gantiPINCtrl'
      }
    }
  })

  .state('pulsaMax.tambahNomor', {
    url: '/tambah',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tambahNomor.html',
        controller: 'tambahNomorCtrl'
      }
    }
  })

  .state('pulsaMax.penjualanPulsa', {
    url: '/pulsa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/penjualanPulsa.html',
        controller: 'penjualanPulsaCtrl'
      }
    }
  })

  .state('pulsaMax.transaksiMultiNomor', {
    url: '/multi',
    views: {
      'side-menu21': {
        templateUrl: 'templates/transaksiMultiNomor.html',
        controller: 'transaksiMultiNomorCtrl'
      }
    }
  })

  .state('pulsaMax.isiPulsa', {
    url: '/isipulsa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/isiPulsa.html',
        controller: 'isiPulsaCtrl'
      }
    }
  })

  .state('pulsaMax.penjualanToken', {
    url: '/token',
    views: {
      'side-menu21': {
        templateUrl: 'templates/penjualanToken.html',
        controller: 'penjualanTokenCtrl'
      }
    }
  })

  .state('pulsaMax', {
    url: '/side-menu21',
    templateUrl: 'templates/pulsaMax.html',
    abstract:true
  })

  .state('pulsaMax.tool', {
    url: '/tool',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tool.html',
        controller: 'toolCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/utama')

  

});