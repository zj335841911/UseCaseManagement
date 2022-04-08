<template src="./ibzpro-story-module-option-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProStoryModuleOptionViewBase } from './ibzpro-story-module-option-view-base';
import view_form from '@widgets/ibzpro-story-module/syc-from-ibz-form/syc-from-ibz-form.vue';

/**
 * 需求模块选项操作视图同步视图
 *
 * @export
 * @class IBZProStoryModuleOptionView
 * @extends {IBZProStoryModuleOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProStoryModuleOptionView extends IBZProStoryModuleOptionViewBase { }
</script>
