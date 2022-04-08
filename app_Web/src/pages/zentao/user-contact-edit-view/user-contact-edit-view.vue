<template src="./user-contact-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserContactEditViewBase } from './user-contact-edit-view-base';
import view_form from '@widgets/user-contact/main-form/main-form.vue';

/**
 * usercontact编辑视图视图
 *
 * @export
 * @class UserContactEditView
 * @extends {UserContactEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserContactEditView extends UserContactEditViewBase {}
</script>
