<template src="./assignedto-group-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedtoGroupGridBase } from './assignedto-group-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class AssignedtoGroupGrid
 * @extends {AssignedtoGroupGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignedtoGroupGrid extends AssignedtoGroupGridBase {}
</script>
