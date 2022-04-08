<template src="./report-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReportEditFormBase } from './report-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ReportEditForm
 * @extends {ReportEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ReportEditForm extends ReportEditFormBase { }
</script>
