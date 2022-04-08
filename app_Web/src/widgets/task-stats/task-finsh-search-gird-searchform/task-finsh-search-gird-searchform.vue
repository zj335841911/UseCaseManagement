<template src="./task-finsh-search-gird-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskFinshSearchGirdSearchFormBase } from './task-finsh-search-gird-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class TaskFinshSearchGirdSearchForm
 * @extends {TaskFinshSearchGirdSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskFinshSearchGirdSearchForm extends TaskFinshSearchGirdSearchFormBase {}
</script>
