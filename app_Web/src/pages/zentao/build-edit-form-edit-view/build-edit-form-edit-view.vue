<template src="./build-edit-form-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildEditFormEditViewBase } from './build-edit-form-edit-view-base';
import view_form from '@widgets/build/edit-form-form/edit-form-form.vue';

/**
 * 版本编辑视图视图
 *
 * @export
 * @class BuildEditFormEditView
 * @extends {BuildEditFormEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BuildEditFormEditView extends BuildEditFormEditViewBase {}
</script>
