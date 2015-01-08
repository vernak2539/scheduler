(function () {

    'use strict';

    angular
        .module( 'sdc.scheduler', [] )
        .controller('SdcSchedulerController', [ '$scope', function( $scope ) {
            var schedule = [];
            var hoursOfDay = [];
            var daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
            var hours = _.range( 24 );

            _.forEach( hours, function( hour ) {
                hoursOfDay.push({
                    hourOfDay: hour
                })
            });

            _.forEach( daysOfWeek, function( day ) {
                schedule.push({
                    name: day
                    , hours: hoursOfDay
                });
            })

            $scope.schedule       = { days: schedule };
            $scope.staticTimezone = true;
        }])
        .directive('sdcScheduler', [
            function () {
                return {
                    restrict: 'A'
                    , controller:'SdcSchedulerController'
                    , transclude: false
                    , scope: {}
                    , link: function (scope) {

                        scope.scheduleModel = scope.schedule;

                        scope.hoursObjTemplate = _.map(_.range(24), function (val) {
                            return { hour: val };
                        });

                        // scope.isMouseDown = false;

                        // scope.setActiveStateForAllHoursInDay = function (state, day) {
                        //     angular.forEach(day.hours, function (hour) {
                        //         hour.active = state;
                        //     });
                        // };
                        //
                        // scope.setAllHoursForDayActive = angular.bind(scope, scope.setActiveStateForAllHoursInDay, true);
                        // scope.setAllHoursForDayInactive = angular.bind(scope, scope.setActiveStateForAllHoursInDay, false);
                        //
                        // scope.onMouseOver = function (hour) {
                        //     if (scope.isMouseDown) {
                        //         hour.active = scope.newActiveState;
                        //     }
                        // };
                        //
                        // scope.onMouseDown = function (hour) {
                        //     hour.active = hour.active ? !hour.active : true;
                        //     scope.isMouseDown = true;
                        //     scope.newActiveState = hour.active;
                        // };
                        //
                        // scope.onMouseUp = function () {
                        //     scope.isMouseDown = false;
                        //     if (scope.validate) {
                        //         scope.validate();
                        //     }
                        // };
                        //
                        // scope.onMouseLeave = function () {
                        //     scope.isMouseDown = false;
                        // };
                    }
                };
            }
        ]);
}());
