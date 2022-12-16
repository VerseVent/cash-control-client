<template>
  <div class="otherbanks">
    <h1 class="otherbanks__title">
      Search for bank
    </h1>
    <div class="otherbanks__form">
      <label
        for="exampleInputEmail1"
        class="form-label"
      >Find bank</label>
      <input
        id="exampleInputEmail1"
        type="email"
        class="form-control otherbanks__input"
        aria-describedby="emailHelp"
      >
    </div>
    <button class="btn btn-primary mt-3">
      Find
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss">
.otherbanks {
  background-color: white;
  padding: 20px;
  border-radius: 0 0 15px 15px;
  transition: height cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
  &__input {
  }
  &__title {
    color: black;
    padding-bottom: 10px;
    font-size: 24px;
  }
}
</style>
