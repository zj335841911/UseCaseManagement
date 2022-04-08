<template src="./bug-stats-bugresolvetion.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsBUGRESOLVETIONBase } from './bug-stats-bugresolvetion-base';
import view_grid from '@widgets/bug-stats/bugresolutioncnt-grid/bugresolutioncnt-grid.vue';
import view_searchform from '@widgets/bug-stats/default-searchform/default-searchform.vue';

/**
 * 每个解决方案的Bug数统计表格视图视图
 *
 * @export
 * @class BugStatsBUGRESOLVETION
 * @extends {BugStatsBUGRESOLVETIONBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsBUGRESOLVETION extends BugStatsBUGRESOLVETIONBase {}
</script>
