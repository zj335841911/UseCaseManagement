<template src="./user-contact-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserContactGridExpViewBase } from './user-contact-grid-exp-view-base';
import view_gridexpbar from '@widgets/user-contact/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 用户联系方式表格导航视图视图
 *
 * @export
 * @class UserContactGridExpView
 * @extends {UserContactGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class UserContactGridExpView extends UserContactGridExpViewBase {}
</script>
