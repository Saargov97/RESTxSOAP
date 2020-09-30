<template>
  <v-layout ml-16 mr-16 mt-8>
    <v-flex>
      <panel title="Listagem">
          <v-btn slot="newButton" class="cyan accent-2" fab ligth small absolute right middle @click="navigateTo({name: 'banks-create'})">
            <v-icon>add</v-icon>
          </v-btn>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              Id
            </v-col>
            <v-col cols="12" sm="6" md="4">
              Name
            </v-col>
          </v-row>
          <div v-for="position in positions" :key="position.id">
              <v-row>
                 <v-col cols="12" sm="6" md="4">
                    {{position.id}}
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    {{position.name}}
                </v-col>
              </v-row>
          </div>
      </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import PositionsService from '@/services/PositionsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      positions: null
    }
  },
  async mounted () {
    this.positions = (await PositionsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
</style>
