<template src="./build-main-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildMainViewBase } from './build-main-view-base';
import view_form from '@widgets/build/main-form/main-form.vue';

/**
 * 版本编辑视图视图
 *
 * @export
 * @class BuildMainView
 * @extends {BuildMainViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BuildMainView extends BuildMainViewBase {}
</script>
