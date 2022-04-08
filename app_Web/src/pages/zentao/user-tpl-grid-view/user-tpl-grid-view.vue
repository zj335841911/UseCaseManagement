<template src="./user-tpl-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserTplGridViewBase } from './user-tpl-grid-view-base';
import view_grid from '@widgets/user-tpl/main-grid/main-grid.vue';
import view_searchform from '@widgets/user-tpl/default-searchform/default-searchform.vue';

/**
 * usertpl表格视图视图
 *
 * @export
 * @class UserTplGridView
 * @extends {UserTplGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class UserTplGridView extends UserTplGridViewBase {}
</script>
