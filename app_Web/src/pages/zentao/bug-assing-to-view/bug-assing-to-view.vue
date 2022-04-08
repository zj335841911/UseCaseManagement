<template src="./bug-assing-to-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugAssingToViewBase } from './bug-assing-to-view-base';
import view_form from '@widgets/bug/assign-to-form/assign-to-form.vue';

/**
 * 指派Bug视图
 *
 * @export
 * @class BugAssingToView
 * @extends {BugAssingToViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugAssingToView extends BugAssingToViewBase {}
</script>
