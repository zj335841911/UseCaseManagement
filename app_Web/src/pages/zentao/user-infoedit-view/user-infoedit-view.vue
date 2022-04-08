<template src="./user-infoedit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserINFOEditViewBase } from './user-infoedit-view-base';
import view_form from '@widgets/user/info-form/info-form.vue';

/**
 * 用户编辑视图视图
 *
 * @export
 * @class UserINFOEditView
 * @extends {UserINFOEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserINFOEditView extends UserINFOEditViewBase { }
</script>
