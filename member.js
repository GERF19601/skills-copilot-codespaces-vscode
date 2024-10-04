function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMebmerController',
        controllerAs: 'vm',
        scope: {
            member: '='
        }
    };
}
