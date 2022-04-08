<template src="./dept-info-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DeptInfoEditViewBase } from './dept-info-edit-view-base';
import view_form from '@widgets/dept/info-form/info-form.vue';

/**
 * 部门编辑视图视图
 *
 * @export
 * @class DeptInfoEditView
 * @extends {DeptInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DeptInfoEditView extends DeptInfoEditViewBase { }
</script>
