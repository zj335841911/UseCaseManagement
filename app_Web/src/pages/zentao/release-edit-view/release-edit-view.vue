<template src="./release-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseEditViewBase } from './release-edit-view-base';
import view_form from '@widgets/release/edit-form-form/edit-form-form.vue';

/**
 * 发布编辑视图视图
 *
 * @export
 * @class ReleaseEditView
 * @extends {ReleaseEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ReleaseEditView extends ReleaseEditViewBase {}
</script>
