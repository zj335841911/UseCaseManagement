<template src="./user-contact-tree-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserContactTreeExpViewBase } from './user-contact-tree-exp-view-base';
import view_treeexpbar from '@widgets/user-contact/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 用户联系方式树导航视图视图
 *
 * @export
 * @class UserContactTreeExpView
 * @extends {UserContactTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class UserContactTreeExpView extends UserContactTreeExpViewBase { }
</script>
