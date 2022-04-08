<template src="./test-list-exp-viewlistexpbar-listexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestListExpViewlistexpbarListexpbarBase } from './test-list-exp-viewlistexpbar-listexpbar-base';
import view_listexpbar_list from '@widgets/product/test-exp-list/test-exp-list.vue';
 

/**
 * listexpbar部件
 *
 * @export
 * @class TestListExpViewlistexpbarListexpbar
 * @extends {TestListExpViewlistexpbarListexpbarBase}
 */
@Component({
    components: {
        view_listexpbar_list,
         
    },
})
@VueLifeCycleProcessing()
export default class TestListExpViewlistexpbarListexpbar extends TestListExpViewlistexpbarListexpbarBase {}
</script>
