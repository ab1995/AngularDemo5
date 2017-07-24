import { Component, NgModule, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {AdService} from '../../services/AdvertisementService'
import {UpdateFormComponent} from '../model-driven2/updateForm.component'
import {ActivatedRoute} from '@angular/router'


@Component({
    selector: 'editForm-comp',
    template: `<updateForm-comp></updateForm-comp>`
})

export class EditFormComponent{
    ad: any;
    constructor(private activatedRoute: ActivatedRoute) {
        this.ad = this.activatedRoute.snapshot.params['ad'];
        console.log(this.ad);
    }
}