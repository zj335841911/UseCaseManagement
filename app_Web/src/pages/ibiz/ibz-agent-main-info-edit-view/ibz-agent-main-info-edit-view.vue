<template src="./ibz-agent-main-info-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzAgentMainInfoEditViewBase } from './ibz-agent-main-info-edit-view-base';
import view_form from '@widgets/ibz-agent/main-info-form/main-info-form.vue';

/**
 * 代理编辑视图视图
 *
 * @export
 * @class IbzAgentMainInfoEditView
 * @extends {IbzAgentMainInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzAgentMainInfoEditView extends IbzAgentMainInfoEditViewBase {}
</script>
