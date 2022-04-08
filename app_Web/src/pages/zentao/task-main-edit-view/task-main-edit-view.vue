<template src="./task-main-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainEditViewBase } from './task-main-edit-view-base';
import view_form from '@widgets/task/main-edit-form/main-edit-form.vue';

/**
 * 任务视图
 *
 * @export
 * @class TaskMainEditView
 * @extends {TaskMainEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMainEditView extends TaskMainEditViewBase {
    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ViewBase
     */
    public closeView(args: any[]): void {
        if (this.viewdata) {
            localStorage.removeItem("newTaskTeam"+ this.context.task);//每次关闭画面移除，表格编辑项变化获得最新团队成员的items
            this.$emit('viewdataschange', [args]);
            this.$emit('close', [args]);
        } else if (this.$tabPageExp) {
            const item = this.$appService.navHistory.findHistoryByTag(this.viewtag);
            this.$tabPageExp.onClose(item);
        } else {
            this.$router.back();
            this.$appService.navHistory.pop();
        }
    }

}
</script>
