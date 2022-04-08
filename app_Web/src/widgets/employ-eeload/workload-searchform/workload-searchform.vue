<template src="./workload-searchform.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WorkloadSearchFormBase } from './workload-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class WorkloadSearchForm
 * @extends {WorkloadSearchFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WorkloadSearchForm extends WorkloadSearchFormBase { }
</script>
