<template src="./dept-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DeptEditViewBase } from './dept-edit-view-base';
import view_form from '@widgets/dept/main-form/main-form.vue';

/**
 * 部门编辑视图视图
 *
 * @export
 * @class DeptEditView
 * @extends {DeptEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DeptEditView extends DeptEditViewBase { }
</script>
