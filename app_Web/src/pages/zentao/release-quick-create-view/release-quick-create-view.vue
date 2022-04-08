<template src="./release-quick-create-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseQuickCreateViewBase } from './release-quick-create-view-base';
import view_form from '@widgets/release/quick-create-form/quick-create-form.vue';

/**
 * 发布编辑视图视图
 *
 * @export
 * @class ReleaseQuickCreateView
 * @extends {ReleaseQuickCreateViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ReleaseQuickCreateView extends ReleaseQuickCreateViewBase {}
</script>
