<template src="./doc-lib-pickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibPickupViewBase } from './doc-lib-pickup-view-base';
import view_pickupviewpanel from '@widgets/doc-lib/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * doclib数据选择视图视图
 *
 * @export
 * @class DocLibPickupView
 * @extends {DocLibPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibPickupView extends DocLibPickupViewBase {}
</script>
