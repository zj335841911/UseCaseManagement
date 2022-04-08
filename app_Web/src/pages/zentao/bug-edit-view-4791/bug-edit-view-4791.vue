<template src="./bug-edit-view-4791.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugEditView_4791Base } from './bug-edit-view-4791-base';
import view_form from '@widgets/bug/build-bug-new-form/build-bug-new-form.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugEditView_4791
 * @extends {BugEditView_4791Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugEditView_4791 extends BugEditView_4791Base {}
</script>
