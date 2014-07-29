'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsCtrl', function ($scope, $location, $modal, Poll) {

    Poll.list(function(polls) {
      $scope.polls = polls;
    });

    $scope.view = function(poll) {
      $location.path('/app/polls/' + poll._id);
    };

    $scope.results = function(poll) {
      $location.path('/app/polls/' + poll._id + '/results');
    };

    $scope.linkToPoll = function(poll) {
        if (poll.active) {
          $scope.view(poll);
        }
        else {
          $scope.results(poll);
        }
      };

    $scope.activate = function(poll) {
      poll.activeUpdating = true;
      poll.isUpdating = true;
      Poll.update({'id': poll._id}, {'active' : true}, function(newPoll) {
        poll.activeUpdating = false;
        poll.isUpdating = false;
        if(newPoll.active !== undefined) {
          poll.active = newPoll.active;
        }
      }, function() {
        poll.activeUpdating = false;
        poll.isUpdating = false;
      });
    };

    $scope.deactivate = function(poll) {
      poll.activeUpdating = true;
      poll.isUpdating = true;
      Poll.update({'id': poll._id}, {'active' : false}, function(newPoll) {
        poll.activeUpdating = false;
        poll.isUpdating = false;
        if(newPoll.active !== undefined) {
          poll.active = newPoll.active;
        }
      }, function() {
        poll.activeUpdating = false;
        poll.isUpdating = false;
      });
    };

    $scope.remove = function(poll) {
      poll.isUpdating = true;
      Poll.remove({
        'id': poll._id
      }, function() {
        for(var i = 0; i < $scope.polls.length; i++) {
          if($scope.polls[i]._id === poll._id) {
            $scope.polls.splice(i, 1);
          }
        }
      }, function() {
        poll.isUpdating = false;
      });
    };

    /**
     * Confirm Delete modal for polls page
     **/
    $scope.confirmRemove = function(poll) {
      var modalInstance = $modal.open({
        'templateUrl': 'partials/modal-confirm-delete.html',
        'controller': ModalInstanceCtrl,
        'resolve': {
          'poll': function() {
            return poll;
          }
        }
      });
      modalInstance.result.then(function() {
        $scope.remove(poll);
      });
    };

    var ModalInstanceCtrl = ['$scope', '$modalInstance', 'poll', function($scope, $modalInstance, poll) {
      $scope.poll = poll;
      $scope.ok = function () {
        $modalInstance.close();
      };
      $scope.cancel = function () {
        $modalInstance.dismiss();
      };
    }];

    /**
     * Help modal for polls page
     **/
    $scope.help = function() {
      var helpModalInstance = $modal.open({
        'templateUrl': 'partials/modal-help.html',
        'controller': HelpModalInstanceCtrl,
        'resolve': {
          view: function() {
            return $scope.view;
          }
        }
      });
      helpModalInstance.result.then(function() {
        return true;
      });
    };
    var HelpModalInstanceCtrl = ['$scope', '$modalInstance', function($scope, $helpModalInstance) {
      $scope.ok = function () {
        $helpModalInstance.close();
      };
    }];
  });
