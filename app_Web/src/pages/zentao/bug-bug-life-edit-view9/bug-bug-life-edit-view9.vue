<template src="./bug-bug-life-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBugLifeEditView9Base } from './bug-bug-life-edit-view9-base';
import view_form from '@widgets/bug/dashboard-bug-life-form/dashboard-bug-life-form.vue';

/**
 * Bug的一生视图
 *
 * @export
 * @class BugBugLifeEditView9
 * @extends {BugBugLifeEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugBugLifeEditView9 extends BugBugLifeEditView9Base {}
</script>
