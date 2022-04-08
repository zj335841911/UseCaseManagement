<template src="./productteamedit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PRODUCTTEAMEditViewBase } from './productteamedit-view-base';
import view_form from '@widgets/productteam/main-form/main-form.vue';

/**
 * 产品团队编辑视图视图
 *
 * @export
 * @class PRODUCTTEAMEditView
 * @extends {PRODUCTTEAMEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class PRODUCTTEAMEditView extends PRODUCTTEAMEditViewBase {}
</script>
