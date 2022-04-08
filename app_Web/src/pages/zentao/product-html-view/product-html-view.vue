<template src="./product-html-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductHtmlViewBase } from './product-html-view-base';

/**
 * iBiz软件生产管理视图
 *
 * @export
 * @class ProductHtmlView
 * @extends {ProductHtmlViewBase}
 */
@Component({
    components: {
    }
})
@VueLifeCycleProcessing()
export default class ProductHtmlView extends ProductHtmlViewBase {}
</script>
