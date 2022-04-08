<template src="./ibizpro-tag-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZProTagEditViewBase } from './ibizpro-tag-edit-view-base';
import view_form from '@widgets/ibizpro-tag/main-form/main-form.vue';

/**
 * 标签编辑视图视图
 *
 * @export
 * @class IBIZProTagEditView
 * @extends {IBIZProTagEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZProTagEditView extends IBIZProTagEditViewBase {}
</script>
