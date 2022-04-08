<template src="./reportly-detail-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReportlyDetailEditFormBase } from './reportly-detail-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ReportlyDetailEditForm
 * @extends {ReportlyDetailEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ReportlyDetailEditForm extends ReportlyDetailEditFormBase {}
</script>
