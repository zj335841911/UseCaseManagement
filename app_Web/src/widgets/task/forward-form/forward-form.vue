<template src="./forward-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ForwardEditFormBase } from './forward-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ForwardEditForm
 * @extends {ForwardEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ForwardEditForm extends ForwardEditFormBase {}
</script>
