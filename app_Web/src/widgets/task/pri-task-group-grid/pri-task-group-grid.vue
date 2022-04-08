<template src="./pri-task-group-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PriTaskGroupGridBase } from './pri-task-group-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PriTaskGroupGrid
 * @extends {PriTaskGroupGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PriTaskGroupGrid extends PriTaskGroupGridBase {}
</script>
