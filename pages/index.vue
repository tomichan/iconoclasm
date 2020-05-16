<template>
  <div class="container">
    <div>
      <h1 class="title is-1">
        図書管理システム
      </h1>
      <button class="button" @click="openModal">追加する</button>
    </div>

    <br />
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>著者</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books.list" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 追加・更新モーダル -->
    <div class="modal" :class="modal && 'is-active'">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">タイトル</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="title">
            </div>
          </div>
          <div class="field">
            <label class="label">著者</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="author">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addBook({title, author})">Save changes</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {
      modal: false,
      modalTitle: '',
      title: null,
      author: null
    }
  },
  computed: mapState(['books']),
  created() {
    this.getList()
  },
  methods: {
    openModal() {
      this.modalTitle = '新規追加'
      this.modal = true
    },
    closeModal() {
      this.title = null
      this.author = null
      this.modal = false
    },
    ...mapActions('books', ['getList', 'add']),
    addBook(book) {
      this.add(book)
      this.closeModal()
    },
    update() {
    },
    delete() {
    }
  }
}
</script>

<style>
</style>
