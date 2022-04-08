<template src="./user-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserEditViewBase } from './user-edit-view-base';
import view_form from '@widgets/user/main-form/main-form.vue';

/**
 * 用户编辑视图视图
 *
 * @export
 * @class UserEditView
 * @extends {UserEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserEditView extends UserEditViewBase { }
</script>
