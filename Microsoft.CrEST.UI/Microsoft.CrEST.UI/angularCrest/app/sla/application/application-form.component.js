var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var ApplicationFormComponent = (function () {
    function ApplicationFormComponent() {
        //public route: ActivatedRoute;
        //constructor(private _route: ActivatedRoute) {
        //    this.route = _route;
        //}
        //onDateChanged(event: IMyDateModel) {
        //    console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        //}
        //private myDatePickerOptions: IMyOptions = {
        //    // other options...
        //    dateFormat: 'dd.mm.yyyy',
        //};
        //private model: Object = { date: { year: 2018, month: 10, day: 9 } };
        //ngOnInit() {
        //    //called after the constructor and called  after the first ngOnChanges() 
        //    if (this.route.snapshot.params['id'] != null) {
        //        //alert(this.route.snapshot.params['id']);
        //    }
        //}
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    // events
    ApplicationFormComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ApplicationFormComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ApplicationFormComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    return ApplicationFormComponent;
}());
ApplicationFormComponent = __decorate([
    Component({
        selector: 'sla-applicationForm',
        template: require('./application-form.component.html'),
    })
], ApplicationFormComponent);
export { ApplicationFormComponent };
//# sourceMappingURL=application-form.component.js.map