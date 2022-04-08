<template src="./ibz-agent-create-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzAgentCreateEditViewBase } from './ibz-agent-create-edit-view-base';
import view_form from '@widgets/ibz-agent/create-form-form/create-form-form.vue';

/**
 * 代理编辑视图视图
 *
 * @export
 * @class IbzAgentCreateEditView
 * @extends {IbzAgentCreateEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzAgentCreateEditView extends IbzAgentCreateEditViewBase {}
</script>
