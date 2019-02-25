<template>
  <div class="notes">
    <div
      v-for="(note, i) in notes"
      :key="note + i"
      class="card"
    >
      <div class="card-content is-size-2">
        {{ note }}
      </div>
      <div class="card-footer">
        <!-- <div class="card-footer-item">
          Edit
        </div> -->
        <base-button
          without-style
          class="card-footer-item"
          @click="$emit('deleteNote', i)"
        >
          Delete
        </base-button>
      </div>
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
    notes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.notes
  display: grid
  gap: 1.618em
  grid-template-columns: repeat(auto-fit, minmax(200px, 325px))
  justify-content: flex-start
  text-align: left
</style>
