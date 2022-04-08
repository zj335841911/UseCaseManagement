<template src="./user-contact-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserContactGridViewBase } from './user-contact-grid-view-base';
import view_grid from '@widgets/user-contact/main-grid/main-grid.vue';
import view_searchform from '@widgets/user-contact/default-searchform/default-searchform.vue';

/**
 * usercontact表格视图视图
 *
 * @export
 * @class UserContactGridView
 * @extends {UserContactGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class UserContactGridView extends UserContactGridViewBase {}
</script>
