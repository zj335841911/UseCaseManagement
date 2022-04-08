<template src="./bug-confirm-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugConfirmViewBase } from './bug-confirm-view-base';
import view_form from '@widgets/bug/confirm-form/confirm-form.vue';

/**
 * 确认Bug视图
 *
 * @export
 * @class BugConfirmView
 * @extends {BugConfirmViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugConfirmView extends BugConfirmViewBase {}
</script>
