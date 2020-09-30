<template>
  <v-layout ml-16 mr-16 mt-8>
    <v-flex>
      <panel title="Metadata">
        <v-text-field label="Name*" v-model="name" required :rules="[required]"></v-text-field>

        <div class="danger-alert" v-if="error">{{error}}</div>
        <v-btn class="cyan" @click="create" dark>Save REST/JSON</v-btn>
        <v-btn class="cyan" @click="navigateTo({name: 'rest-listagem'})" dark>Cancel</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PositionsService from '@/services/PositionsService'
export default {
  data () {
    return {
      name: null,
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const position = {
        name: this.name
      }
      const areAllFieldsFilledIn = Object
        .keys(position)
        .every(key => !!position[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Informe todos os campos obrigatórios'
        return
      }
      try {
        await PositionsService.post(position)
        this.$router.push({ name: 'rest-listagem' })
      } catch (err) {
        console.log(err)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
</style>
