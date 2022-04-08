<template src="./bug-grid-view9-my-assigned-to-me.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridView9_MyAssignedToMeBase } from './bug-grid-view9-my-assigned-to-me-base';
import view_grid from '@widgets/bug/main-grid/main-grid.vue';

/**
 * Bug表格视图视图
 *
 * @export
 * @class BugGridView9_MyAssignedToMe
 * @extends {BugGridView9_MyAssignedToMeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugGridView9_MyAssignedToMe extends BugGridView9_MyAssignedToMeBase {}
</script>
