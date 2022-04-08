<template src="./bug-grid-view9-assigned-to-me.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridView9_AssignedToMeBase } from './bug-grid-view9-assigned-to-me-base';
import view_grid from '@widgets/bug/main2-grid/main2-grid.vue';

/**
 * Bug表格视图视图
 *
 * @export
 * @class BugGridView9_AssignedToMe
 * @extends {BugGridView9_AssignedToMeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugGridView9_AssignedToMe extends BugGridView9_AssignedToMeBase {}
</script>
