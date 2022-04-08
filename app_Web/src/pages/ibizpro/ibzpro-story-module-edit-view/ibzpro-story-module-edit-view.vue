<template src="./ibzpro-story-module-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProStoryModuleEditViewBase } from './ibzpro-story-module-edit-view-base';
import view_form from '@widgets/ibzpro-story-module/main-form/main-form.vue';

/**
 * 需求模块编辑视图视图
 *
 * @export
 * @class IBZProStoryModuleEditView
 * @extends {IBZProStoryModuleEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProStoryModuleEditView extends IBZProStoryModuleEditViewBase { }
</script>
