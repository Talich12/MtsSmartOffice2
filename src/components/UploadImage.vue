<template>
  <div>
    <input
      type="file"
      id="fileInput"
      style="display: none"
      @change="uploadImage"
    />
    <div class="input">
      <n-button block @click="handleBrowseClick()">Выбрать фото</n-button>
      <n-button success block @click="sendRequest()"
        >Сделать предсказание</n-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {NButton} from "naive-ui"
export default {
  props: ["mode"],
  components: {
    NButton
  },
  data() {
    return {
      form: [],
    };
  },
  methods: {
    handleBrowseClick() {
      document.getElementById("fileInput").click();
    },
    uploadImage(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      this.form = formData;
    },
    sendRequest() {
      if (this.mode == "face-recognition") {
        axios
          .post("http://localhost:3000/face-recognition", this.form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.$emit("name", response.data.name);
            console.log(response);
          })
          .catch((error) => {
            // Обработка ошибки
            console.log(error);
          });
      } else if (this.mode == "people-count") {
        axios
          .post("http://localhost:3000/people-count", this.form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.$emit("people_count", response.data.count);
            console.log(response);
          })
          .catch((error) => {
            // Обработка ошибки
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
