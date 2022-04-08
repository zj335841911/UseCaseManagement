<template src="./doc-lib-lib-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibLibTabExpViewBase } from './doc-lib-lib-tab-exp-view-base';
import view_tabexppanel from '@widgets/doc-lib/lib-tab-exp-viewtabexppanel-tabexppanel/lib-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 文档库分页导航视图（文档）视图
 *
 * @export
 * @class DocLibLibTabExpView
 * @extends {DocLibLibTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibLibTabExpView extends DocLibLibTabExpViewBase {}
</script>
