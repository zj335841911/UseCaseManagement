<template src="./ibizpro-keyword-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZProKeywordEditViewBase } from './ibizpro-keyword-edit-view-base';
import view_form from '@widgets/ibizpro-keyword/main-form/main-form.vue';

/**
 * 关键字编辑视图视图
 *
 * @export
 * @class IBIZProKeywordEditView
 * @extends {IBIZProKeywordEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZProKeywordEditView extends IBIZProKeywordEditViewBase {}
</script>
