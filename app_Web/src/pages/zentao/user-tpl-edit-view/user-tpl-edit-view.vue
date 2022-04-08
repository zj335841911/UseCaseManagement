<template src="./user-tpl-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserTplEditViewBase } from './user-tpl-edit-view-base';
import view_form from '@widgets/user-tpl/main-form/main-form.vue';

/**
 * usertpl编辑视图视图
 *
 * @export
 * @class UserTplEditView
 * @extends {UserTplEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserTplEditView extends UserTplEditViewBase {}
</script>
