<template src="./action-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionOptionViewBase } from './action-option-view-base';
import view_form from '@widgets/action/add-comment-form/add-comment-form.vue';

/**
 * 添加备注视图
 *
 * @export
 * @class ActionOptionView
 * @extends {ActionOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ActionOptionView extends ActionOptionViewBase {}
</script>
