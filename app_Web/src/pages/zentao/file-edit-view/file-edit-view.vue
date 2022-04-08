<template src="./file-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FileEditViewBase } from './file-edit-view-base';
import view_form from '@widgets/file/main-form/main-form.vue';

/**
 * file编辑视图视图
 *
 * @export
 * @class FileEditView
 * @extends {FileEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class FileEditView extends FileEditViewBase { }
</script>
