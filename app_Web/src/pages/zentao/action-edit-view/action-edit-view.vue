<template src="./action-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionEditViewBase } from './action-edit-view-base';
import view_form from '@widgets/action/main-form/main-form.vue';

/**
 * 备注视图
 *
 * @export
 * @class ActionEditView
 * @extends {ActionEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ActionEditView extends ActionEditViewBase {}
</script>
