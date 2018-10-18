import vdog = dogsrus.virtdog;
describe('In the file masterController.ts', () => {
    describe('the masterController\'s', () => {
        let sut: vdog.MasterController,
        $rootScope: ng.IRootScopeService,
        $controller: ng.IControllerService,
        masterControllerParams: {
            $rootScope: ng.IRootScopeService;
            eventNames: vdog.EventNames
        };

        beforeEach(()=> {
            angular.mock.module('app.people');
            
        })
        describe('contructor', () => {
         
        });
        describe('throwSoming method', ()=>{

        });

        describe('feedTheDog method',() => {

        });
    });

    describe('the MasterAction object\'s constructor', ()=>{

    })
})