<template src="./ibz-lib-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibTabExpViewBase } from './ibz-lib-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-lib/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 用例库视图
 *
 * @export
 * @class IbzLibTabExpView
 * @extends {IbzLibTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibTabExpView extends IbzLibTabExpViewBase {}
</script>
