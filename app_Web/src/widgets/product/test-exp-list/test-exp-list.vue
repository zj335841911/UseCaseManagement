<template src="./test-exp-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestExpListBase } from './test-exp-list-base';
 

/**
 * listexpbar_list部件
 *
 * @export
 * @class TestExpList
 * @extends {TestExpListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestExpList extends TestExpListBase {}
</script>
