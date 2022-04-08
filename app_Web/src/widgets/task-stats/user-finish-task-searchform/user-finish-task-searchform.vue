<template src="./user-finish-task-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserFinishTaskSearchFormBase } from './user-finish-task-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class UserFinishTaskSearchForm
 * @extends {UserFinishTaskSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UserFinishTaskSearchForm extends UserFinishTaskSearchFormBase {}
</script>
