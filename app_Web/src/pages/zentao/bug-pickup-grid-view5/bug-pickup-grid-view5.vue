<template src="./bug-pickup-grid-view5.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugPickupGridView5Base } from './bug-pickup-grid-view5-base';
import view_grid from '@widgets/bug/pickup-gird-grid/pickup-gird-grid.vue';

/**
 * bug选择表格视图视图
 *
 * @export
 * @class BugPickupGridView5
 * @extends {BugPickupGridView5Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugPickupGridView5 extends BugPickupGridView5Base {}
</script>
