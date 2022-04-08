<template src="./user-contact-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserContactUsr2GridViewBase } from './user-contact-usr2-grid-view-base';
import view_grid from '@widgets/user-contact/main-grid/main-grid.vue';
import view_searchform from '@widgets/user-contact/default-searchform/default-searchform.vue';

/**
 * 用户联系方式表格视图视图
 *
 * @export
 * @class UserContactUsr2GridView
 * @extends {UserContactUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class UserContactUsr2GridView extends UserContactUsr2GridViewBase {}
</script>
