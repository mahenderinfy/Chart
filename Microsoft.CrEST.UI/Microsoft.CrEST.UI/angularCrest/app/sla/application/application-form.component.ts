import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { MyDatePickerModule } from 'mydatepicker';
import { IMyOptions } from 'mydatepicker';
import { IMyDateModel } from 'mydatepicker';



@Component({
    selector: 'sla-applicationForm',
    template: require('./application-form.component.html'),
})
export class ApplicationFormComponent {

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




    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;

    }
}