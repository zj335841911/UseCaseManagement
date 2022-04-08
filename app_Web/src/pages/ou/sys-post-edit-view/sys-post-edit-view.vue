<template src="./sys-post-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysPostEditViewBase } from './sys-post-edit-view-base';
import view_form from '@widgets/sys-post/main-form/main-form.vue';

/**
 * 岗位编辑视图视图
 *
 * @export
 * @class SysPostEditView
 * @extends {SysPostEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysPostEditView extends SysPostEditViewBase {}
</script>
