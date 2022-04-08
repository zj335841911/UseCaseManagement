<template src="./add-comment-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AddCommentEditFormBase } from './add-comment-form-base';
 

/**
 * form部件
 *
 * @export
 * @class AddCommentEditForm
 * @extends {AddCommentEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AddCommentEditForm extends AddCommentEditFormBase {}
</script>
<style lang="less">
@import './add-comment-form.less';
</style>
