<template src="./type-task-group-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TypeTaskGroupGridBase } from './type-task-group-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TypeTaskGroupGrid
 * @extends {TypeTaskGroupGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TypeTaskGroupGrid extends TypeTaskGroupGridBase {}
</script>
