angular.module("bitquiz", ["ngAnimate"])

    .controller("questionCtrl", function($scope) {

        $scope.question = "";
        // Randomize questions on startup
        $scope.questions = _.shuffle(questions);
        // Array index of current question
        $scope.current = 0;

        $scope.getQuestion = function() {

            $scope.question = $scope.questions[$scope.current++];

            // Restart game
            if ($scope.current === $scope.questions.length) {
                $scope.current = 0;
            }

        };

    })
    .directive('fadeOnChange', function($animate) {

        // Code from http://httplambda.com/creating-a-directive-using-nganimate-in-angularjs/
        return {

            restrict: 'E',

            //We output the value which will be set between fades
            template: '{{theFadedValue.nv}}',

            link: function(scope, elem, attr) {

                //The scope variable we will watch
                var vtw = attr.valueToWatch;

                //We add the anim class to set transitions
                elem.addClass('anim');

                //We watch the value
                scope.$watch(vtw, function(nv) {

                    //we fade out
                    var promise = $animate.addClass(elem, 'fade-it-out');

                    //when fade out is done, we set the new value
                    promise.then(function() {

                        scope.$evalAsync(function() {
                            //use of dot notation for good practice
                            scope.theFadedValue = {
                                "nv": nv
                            };
                            //we fade it back in
                            $animate.removeClass(elem, 'fade-it-out');
                        });
                    });
                })
            }
        };
    });