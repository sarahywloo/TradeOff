namespace TradeOff.Controllers {
    export class HomeController {
        constructor(private $anchorScroll, private scrollService) {
            //this.scrollService.receiveScrollId().then(function (id) {
            //    this.$anchorScroll(id);
            //});
        }

        public scrollTo(id) {
            //this.scrollService.scrollTo(id);
            this.$anchorScroll(id);
        }
    }
    angular.module('TradeOffProject').controller('homeController', HomeController);
}