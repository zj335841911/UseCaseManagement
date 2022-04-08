<template src="./doc-lib-usr2-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibUsr2EditViewBase } from './doc-lib-usr2-edit-view-base';
import view_form from '@widgets/doc-lib/main-form/main-form.vue';

/**
 * 文档库编辑视图视图
 *
 * @export
 * @class DocLibUsr2EditView
 * @extends {DocLibUsr2EditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibUsr2EditView extends DocLibUsr2EditViewBase {}
</script>
