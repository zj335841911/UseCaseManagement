<template src="./sys-post-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysPostGridExpViewBase } from './sys-post-grid-exp-view-base';
import view_gridexpbar from '@widgets/sys-post/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 岗位表格导航视图视图
 *
 * @export
 * @class SysPostGridExpView
 * @extends {SysPostGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysPostGridExpView extends SysPostGridExpViewBase {}
</script>
