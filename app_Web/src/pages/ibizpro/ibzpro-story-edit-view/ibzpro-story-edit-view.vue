<template src="./ibzpro-story-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProStoryEditViewBase } from './ibzpro-story-edit-view-base';
import view_form from '@widgets/ibzpro-story/main-form/main-form.vue';

/**
 * 需求编辑视图视图
 *
 * @export
 * @class IBZProStoryEditView
 * @extends {IBZProStoryEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProStoryEditView extends IBZProStoryEditViewBase { }
</script>
