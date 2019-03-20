<template>
  <div class="add-note">
    <div
      ref="editor"
      :class="['box', {'has-text-weight-bold': note.length}]"
      contenteditable="true"
      v-bind="$listeners"
      @input="$emit('handleUpdate', $event)"
      @focus="togglePlaceholder(false)"
      @blur="togglePlaceholder(true)"
    >
      {{ placeholder }}
    </div>
    <div class="button__wrapper">
      <base-button
        :disabled="!note.length"
        @click="$emit('addNote', $refs.editor)"
      >
        Add a New Note
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseButton
  },

  props: {
    note: {
      type: String,
      required: true
    }
  },

  data: () => ({ placeholder: 'Type to enter a new note...' }),

  methods: {
    togglePlaceholder(bool) {
      if (bool && !this.note.length) {
        this.$refs.editor.innerHTML = this.placeholder
      } else if (!bool && !this.note.length) {
        this.$refs.editor.innerHTML = ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.button__wrapper
  display: flex
  justify-content: center

.add-note
  margin: auto
  max-width: 500px
  width: 100%
  text-align: left
</style>
