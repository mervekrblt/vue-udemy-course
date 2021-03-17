<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" ref="titleInput">
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" rows="3" ref="descInput"></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" ref="linkInput">
      </div>

      <div>
        <base-button type="submit" @click.prevent="submitData">Add Resource</base-button>
      </div>

    </form>
  </base-card>
</template>

<script>
export default {

  inject: ['addResources'],

  methods: {

    submitData() {

      const enteredTitle = this.$refs.titleInput.value
      const enteredDesc = this.$refs.descInput.value
      const enteredLink = this.$refs.linkInput.value

      if(this.enteredTitle.trim() === '' || this.enteredDesc.trim() || this.enteredLink.trim()){
        return
      }

      this.addResources(enteredTitle, enteredDesc, enteredLink)
    },
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>