<template src="./build-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildEditViewBase } from './build-edit-view-base';
import view_form from '@widgets/build/quick-create-form/quick-create-form.vue';

/**
 * 版本编辑视图视图
 *
 * @export
 * @class BuildEditView
 * @extends {BuildEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BuildEditView extends BuildEditViewBase {}
</script>
