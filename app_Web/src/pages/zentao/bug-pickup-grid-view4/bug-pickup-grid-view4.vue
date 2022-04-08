<template src="./bug-pickup-grid-view4.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugPickupGridView4Base } from './bug-pickup-grid-view4-base';
import view_grid from '@widgets/bug/pickup-gird-grid/pickup-gird-grid.vue';

/**
 * bug选择表格视图视图
 *
 * @export
 * @class BugPickupGridView4
 * @extends {BugPickupGridView4Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugPickupGridView4 extends BugPickupGridView4Base {}
</script>
