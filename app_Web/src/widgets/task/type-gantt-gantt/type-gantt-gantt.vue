<template src="./type-gantt-gantt.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TypeGanttGanttBase } from './type-gantt-gantt-base';
import GanttElastic from "ibz-gantt-elastic/src/GanttElastic.vue";
 

/**
 * gantt部件
 *
 * @export
 * @class TypeGanttGantt
 * @extends {TypeGanttGanttBase}
 */
@Component({
    components: {
        GanttElastic,
 
    },
})
@VueLifeCycleProcessing()
export default class TypeGanttGantt extends TypeGanttGanttBase {}
</script>
