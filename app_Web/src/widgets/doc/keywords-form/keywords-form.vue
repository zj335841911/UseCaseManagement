<template src="./keywords-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { KeywordsEditFormBase } from './keywords-form-base';
 

/**
 * form部件
 *
 * @export
 * @class KeywordsEditForm
 * @extends {KeywordsEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class KeywordsEditForm extends KeywordsEditFormBase {}
</script>
