<template src="./bug-usr3-grid-view1.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugUsr3GridView1Base } from './bug-usr3-grid-view1-base';
import view_grid from '@widgets/bug/main-data-export-grid/main-data-export-grid.vue';

/**
 * Bug表格视图(遗留的bug)视图
 *
 * @export
 * @class BugUsr3GridView1
 * @extends {BugUsr3GridView1Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugUsr3GridView1 extends BugUsr3GridView1Base { }
</script>
