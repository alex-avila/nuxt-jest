<template>
  <section class="container section">
    <add-note-editor
      :note="currentNote"
      @handleUpdate="handleUpdate"
      @addNote="addNote"
    />
    <notes :notes="notes" @deleteNote="deleteNote" />
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import AddNoteEditor from '@/components/AddNote.vue'
import Notes from '@/components/Notes.vue'

export default {
  components: {
    // Logo
    AddNoteEditor,
    Notes
  },

  data: () => ({
    notes: [],
    currentNote: ''
  }),

  methods: {
    handleUpdate({ target }) {
      this.currentNote = target.innerText
    },

    addNote(editor) {
      this.notes.push(this.currentNote)

      this.currentNote = ''
      editor.innerText = this.currentNote
    },

    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.618em;
  justify-content: stretch;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
