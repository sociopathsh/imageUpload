<template>

    <div>
        <div v-if="!cropped">
            <div id="vue-avatar">
                <vue-avatar
                        :width=200
                        :height=200
                        :border=5
                        ref="vueavatar"
                        @vue-avatar-editor:image-ready="onImageReady"
                        image="https://vuejs.org/images/logo.png">
                </vue-avatar>
            </div>
            <br>
            <div id="vue-avatar-scale">
                <vue-avatar-scale
                        ref="vueavatarscale"
                        @vue-avatar-editor-scale:change-scale="onChangeScale"
                        :width=250
                        :min=1
                        :max=3
                        :step=0.02
                >
                </vue-avatar-scale>
            </div>
            <button v-if="selected" v-on:click="saveClicked" class="btn btn-primary float-right">Crop</button>
        </div>
            <div v-else>
                <img :src="croppedImage" id="img-1">
                <button v-if="cropped" class="btn btn-primary float-right">Save</button>
                <button v-if="cropped" class="btn btn-primary float-right mr-3" @click="backToCrop">Back</button>
            </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    import VueAvatar from '../src/components/VueAvatar.vue'
    import VueAvatarScale from '../src/components/VueAvatarScale.vue'
    export default {
        data() {
          return {
              croppedImage : '',
              cropped: false,
              selected: false
          }
        },
        components: {
            VueAvatar,
            VueAvatarScale
        },
        methods:{
            onChangeScale (scale) {
                this.$refs.vueavatar.changeScale(scale)
            },
            saveClicked(){
                var img = this.$refs.vueavatar.getImageScaled()
                this.croppedImage = img.toDataURL();
                this.cropped = true;
            },
            onImageReady(scale){
                this.$refs.vueavatarscale.setScale(scale)
                this.selected = true;
            },
            backToCrop() {
                this.cropped = false;
                this.selected = false;
            }
        }
    }
</script>

<style scoped>

    #vue-avatar, #vue-avatar-scale {
        text-align: center;
    }

    img {
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }


</style>