<template src="./ibz-project-member-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzProjectMemberEditView9Base } from './ibz-project-member-edit-view9-base';
import view_form from '@widgets/ibz-project-member/main-form/main-form.vue';

/**
 * 项目相关成员编辑视图（相关成员）视图
 *
 * @export
 * @class IbzProjectMemberEditView9
 * @extends {IbzProjectMemberEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzProjectMemberEditView9 extends IbzProjectMemberEditView9Base {}
</script>
