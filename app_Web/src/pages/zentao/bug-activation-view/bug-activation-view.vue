<template src="./bug-activation-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugActivationViewBase } from './bug-activation-view-base';
import view_form from '@widgets/bug/activation-form/activation-form.vue';

/**
 * 激活Bug视图
 *
 * @export
 * @class BugActivationView
 * @extends {BugActivationViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugActivationView extends BugActivationViewBase {}
</script>
